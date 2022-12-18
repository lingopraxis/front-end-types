"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMeetingResult = exports.JoinMeetingResult = exports.LanguageLevel = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["NotSet"] = 1] = "NotSet";
    Gender[Gender["Male"] = 2] = "Male";
    Gender[Gender["Female"] = 3] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var LanguageLevel;
(function (LanguageLevel) {
    LanguageLevel[LanguageLevel["None"] = 0] = "None";
    LanguageLevel[LanguageLevel["Beginner"] = 1] = "Beginner";
    LanguageLevel[LanguageLevel["PreIntermediate"] = 2] = "PreIntermediate";
    LanguageLevel[LanguageLevel["Intermediate"] = 4] = "Intermediate";
    LanguageLevel[LanguageLevel["UpperIntermediate"] = 8] = "UpperIntermediate";
    LanguageLevel[LanguageLevel["Advanced"] = 16] = "Advanced";
    LanguageLevel[LanguageLevel["Proficiency"] = 32] = "Proficiency";
})(LanguageLevel = exports.LanguageLevel || (exports.LanguageLevel = {}));
var JoinMeetingResult;
(function (JoinMeetingResult) {
    JoinMeetingResult[JoinMeetingResult["Success"] = 1] = "Success";
    JoinMeetingResult[JoinMeetingResult["AllSeatsAreTaken"] = 2] = "AllSeatsAreTaken";
    JoinMeetingResult[JoinMeetingResult["HasMeetingSameTime"] = 3] = "HasMeetingSameTime";
    JoinMeetingResult[JoinMeetingResult["AlreadyInProgressOrEnded"] = 4] = "AlreadyInProgressOrEnded";
    JoinMeetingResult[JoinMeetingResult["Canceled"] = 5] = "Canceled";
})(JoinMeetingResult = exports.JoinMeetingResult || (exports.JoinMeetingResult = {}));
var CreateMeetingResult;
(function (CreateMeetingResult) {
    CreateMeetingResult[CreateMeetingResult["Success"] = 1] = "Success";
    CreateMeetingResult[CreateMeetingResult["TokenHasBeenExpiredOrRevoked"] = 2] = "TokenHasBeenExpiredOrRevoked";
    CreateMeetingResult[CreateMeetingResult["CouldNotCreateGoogleMeetLink"] = 3] = "CouldNotCreateGoogleMeetLink";
    CreateMeetingResult[CreateMeetingResult["HasMeetingSameTime"] = 4] = "HasMeetingSameTime";
    CreateMeetingResult[CreateMeetingResult["UnknownError"] = 5] = "UnknownError";
})(CreateMeetingResult = exports.CreateMeetingResult || (exports.CreateMeetingResult = {}));
