'''------------------------------------------------------------------------------
--------------------------------IMPORTS---------------------------------------'''
from flask import Flask, request, render_template
try:
    from hidden_data import myDB_Password #gitignore file
except:
    print("No password found")
import pymongo
import json
from flask_cors import CORS
#------------------------------------------------------------------------------


'''------------------------------------------------------------------------------
--------------------------------INITIAL SETUP---------------------------------'''
app = Flask(__name__, static_folder='build/static', template_folder="build") 
LOCAL_HOST = False #Running on local host(development_environment)
LOCAL_HOST and CORS(app) #if running on local host cors policy to allow all type of access
myDB = None #Database Connection
DB_PASSWORD = None
try:
    DB_PASSWORD = myDB_Password()
except:
    DB_PASSWORD = "*******"

tiePoint=1   #as per PRS(Description)
lossPoint=0  #as per PRS(Description)
winPoint=3   #as per PRS(Description)
#------------------------------------------------------------------------------\


'''------------------------------------------------------------------------------
------------------------CONNECTION TO DATABASE--------------------------------'''
def connect():
    global myDB
    myclient = pymongo.MongoClient("mongodb+srv://admin:"+ DB_PASSWORD +"@cluster0.hy05e.mongodb.net/leaderboard?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE")
    myDB = myclient["leaderboard"]
    myDB = myDB["list"]
if LOCAL_HOST: #initial coonection for local_host (development_environment)
        connect()
#------------------------------------------------------------------------------


'''------------------------------------------------------------------------------
-------------------------HOME ROUTE TO REACT BUILD FOLDER---------------------'''
@app.route('/')
def index():
    if myDB is None:
        connect()
    return render_template('index.html')
#------------------------------------------------------------------------------


'''------------------------------------------------------------------------------
-----------------------POST METHOD TO RETRIEVE TABLE DATA---------------------'''
@app.route('/FetchData',methods=["POST"])
def getData():
    skip = int(request.form.get('skip')) #documents/rows to skip(pagination)
    sortby = int(request.form.get('sortby')) #sort by {"0" : "Team_Name" , "1" : "Score"}
    team_name = str(request.form.get('team')) #search value (team name)[if any]
    if not isinstance(team_name, str):
        team_name = ""
    myquery = { "team_name": { "$regex": "^"+ team_name  } }
    score = str(request.form.get('score')) #search value (score)[if any]
    if not isinstance(score, str):
        score = ""
    if len(score) > 0:
        myquery["score"] = int(score)
    myDoc = None
    if sortby==0:
        #sort by team_name(ascending) in order
        myDoc = myDB.find(myquery).skip(skip).limit(10).sort([("team_name", pymongo.ASCENDING)])
    else:
        #sort by [score(descending), wins(descending), ties(descending), losses(ascending)] in order
        myDoc = myDB.find(myquery).skip(skip).limit(10).sort([("score", pymongo.DESCENDING),("wins", pymongo.DESCENDING),("ties", pymongo.DESCENDING),("losses",pymongo.ASCENDING)])
    count = myDB.count_documents(myquery)
    result = [{"count":count}] #no of documnets/rows in database
    for doc in myDoc:
        result.append(doc)
    return json.dumps(result,default=str) 
#------------------------------------------------------------------------------


'''------------------------------------------------------------------------------
---------------------------POST METHOD TO ADD TEAM NAME-----------------------'''
@app.route('/AddData',methods=["POST"])
def addData():
    name = request.form.get('name')
    try:
        count = myDB.count_documents({"team_name" : name}) #Check if team with exact-same name exists!
        if count>0:
            return "2"
        mydict = { "team_name": name, "wins": 0, "losses":0, "ties": 0 ,"score" :0 } #Initialize new team parameters to 0(Zero)
        myDB.insert_one(mydict)
        return "1" #Success
    except:
        return "0" #Database error (failure)
#------------------------------------------------------------------------------


'''------------------------------------------------------------------------------
--------------------------POST METHOD TO ADD MATCH DETAILS---------------------'''
def winner(teamName):
    '''
        Method to update data for the winning team
    '''
    myquery = { "team_name": teamName  }
    X = myDB.find(myquery)
    x = [i for i in X][0]
    newvalues = { "$set": { "wins": int(x["wins"])+1, "score": int(x["score"])+winPoint } }
    myDB.update_one(myquery, newvalues)

def loser(teamName):
    '''
        Method to update data for the lossing team
    '''
    myquery = { "team_name": teamName  }
    X = myDB.find(myquery)
    x = [i for i in X][0]
    newvalues = { "$set": { "losses": int(x["losses"])+1 } }
    myDB.update_one(myquery, newvalues)

def tie(teamName):
    '''
        Method to update data if the match was tied
    '''
    myquery = { "team_name": teamName  }
    X = myDB.find(myquery)
    x = [i for i in X][0]
    newvalues = { "$set": { "ties": x["ties"]+1, "score": x["score"]+tiePoint } }
    myDB.update_one(myquery, newvalues)

@app.route('/AddMatch',methods=["POST"])
def addMatch():
    teamA = request.form.get('teamA')
    teamB = request.form.get('teamB')
    status = int(request.form.get('status'))
    try:
        if status==1: #TeamA wins
            winner(teamA)
            loser(teamB)
        elif status==2: #TeamB wins
            winner(teamB)
            loser(teamA)
        elif status==0: #Match Tied
            tie(teamA)
            tie(teamB)
        return "1" #Success
    except:
        return "0"#Database error (failure)
#------------------------------------------------------------------------------


'''------------------------------------------------------------------------------
------------------------POST METHOD TO GET LIST OF TEAM NAMES----------------- '''
@app.route('/TeamsList',methods=["POST"])
def getList():
    result = myDB.distinct("team_name")
    return json.dumps(result,default=str)
#------------------------------------------------------------------------------

LOCAL_HOST and app.run() #if running on local host run app
