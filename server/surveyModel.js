var db = require('../db');
var Schema = db.Schema,
    ObjectId = Schema.ObjectId;

var ParticipantSchema = new Schema({
  participantName: String,
  fullURL: String
});

var EventSchema = new Schema({
  eventName: String,
  participants: [{
    type: ObjectId,
    ref: 'participants'
  }]
});

var SurveyModel = {};

SurveyModel.Participant = db.model('participants', ParticipantSchema);
SurveyModel.Event = db.model('events', EventSchema);

module.exports = SurveyModel;