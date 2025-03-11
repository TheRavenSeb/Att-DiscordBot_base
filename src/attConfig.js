require('dotenv').config();
/*module.exports = {
	attConfig:{
    clientId: process.env.ATTCLIENT,
    clientSecret: process.env.ATTSECRET,
    scope: [
      
        'ws.group',
        'ws.group_members',
        'ws.group_servers',
        'ws.group_bans',
        'ws.group_invites',
        'group.info',
        'group.join',
        'group.leave',
        'group.view',
        'group.members',
        'group.invite',
        'server.view',
        'server.console'

    ],
    logVerbosity: 3,
    apiRequestAttempts: 1,

  }}*/ // uncomment if using bot creds 

  module.exports = {
	attConfig:{
    username:"", // put username here
    password:"",     // put password here 
    
    logVerbosity: 3,
   

  }} // comment if using bot creds
