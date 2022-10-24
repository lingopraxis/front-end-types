"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinMeetingResult = exports.LanguageLevel = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["NotSet"] = 1] = "NotSet";
    Gender[Gender["Male"] = 2] = "Male";
    Gender[Gender["Female"] = 3] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var LanguageLevel;
(function (LanguageLevel) {
    LanguageLevel[LanguageLevel["Beginner"] = 1] = "Beginner";
    LanguageLevel[LanguageLevel["PreIntermediate"] = 2] = "PreIntermediate";
    LanguageLevel[LanguageLevel["Intermediate"] = 3] = "Intermediate";
    LanguageLevel[LanguageLevel["UpperIntermediate"] = 4] = "UpperIntermediate";
    LanguageLevel[LanguageLevel["Advanced"] = 5] = "Advanced";
    LanguageLevel[LanguageLevel["Proficiency"] = 6] = "Proficiency";
})(LanguageLevel = exports.LanguageLevel || (exports.LanguageLevel = {}));
var JoinMeetingResult;
(function (JoinMeetingResult) {
    JoinMeetingResult[JoinMeetingResult["Success"] = 1] = "Success";
    JoinMeetingResult[JoinMeetingResult["AllSeatsAreTaken"] = 2] = "AllSeatsAreTaken";
    JoinMeetingResult[JoinMeetingResult["HasMeetingSameTime"] = 3] = "HasMeetingSameTime";
})(JoinMeetingResult = exports.JoinMeetingResult || (exports.JoinMeetingResult = {}));
