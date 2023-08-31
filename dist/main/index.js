"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMeetingResult = exports.Sort = exports.CreateMeetingResult = exports.JoinMeetingResult = exports.MeetingType = exports.PushNotificationTypes = exports.Gender = exports.DeviceType = exports.SocialLoginProvider = exports.LanguageLevel = exports.ApplicationErrorCode = void 0;
var ApplicationErrorCode;
(function (ApplicationErrorCode) {
    ApplicationErrorCode[ApplicationErrorCode["BadRequest"] = 1000] = "BadRequest";
    ApplicationErrorCode[ApplicationErrorCode["Unauthorized"] = 1002] = "Unauthorized";
    ApplicationErrorCode[ApplicationErrorCode["Forbidden"] = 1003] = "Forbidden";
    ApplicationErrorCode[ApplicationErrorCode["InternalServerError"] = 1004] = "InternalServerError";
    ApplicationErrorCode[ApplicationErrorCode["GoogleAuthEmailNotVerified"] = 1005] = "GoogleAuthEmailNotVerified";
    ApplicationErrorCode[ApplicationErrorCode["DuplicateEmailAddress"] = 1006] = "DuplicateEmailAddress";
    ApplicationErrorCode[ApplicationErrorCode["UserNotRegistered"] = 1007] = "UserNotRegistered";
    ApplicationErrorCode[ApplicationErrorCode["GoogleAuthIdTokenInvalid"] = 1008] = "GoogleAuthIdTokenInvalid";
    ApplicationErrorCode[ApplicationErrorCode["LanguageDoesNotExist"] = 1009] = "LanguageDoesNotExist";
    ApplicationErrorCode[ApplicationErrorCode["CannotLeaveMeeting"] = 1010] = "CannotLeaveMeeting";
    ApplicationErrorCode[ApplicationErrorCode["AppleAuthCodeInvalid"] = 1011] = "AppleAuthCodeInvalid";
    ApplicationErrorCode[ApplicationErrorCode["EntityNotFound"] = 1012] = "EntityNotFound";
})(ApplicationErrorCode = exports.ApplicationErrorCode || (exports.ApplicationErrorCode = {}));
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
var SocialLoginProvider;
(function (SocialLoginProvider) {
    SocialLoginProvider[SocialLoginProvider["None"] = 0] = "None";
    SocialLoginProvider[SocialLoginProvider["Google"] = 1] = "Google";
    SocialLoginProvider[SocialLoginProvider["Apple"] = 2] = "Apple";
})(SocialLoginProvider = exports.SocialLoginProvider || (exports.SocialLoginProvider = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["None"] = 0] = "None";
    DeviceType[DeviceType["Android"] = 1] = "Android";
    DeviceType[DeviceType["Ios"] = 2] = "Ios";
    DeviceType[DeviceType["Web"] = 3] = "Web";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var Gender;
(function (Gender) {
    Gender[Gender["NotSet"] = 1] = "NotSet";
    Gender[Gender["Male"] = 2] = "Male";
    Gender[Gender["Female"] = 3] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var PushNotificationTypes;
(function (PushNotificationTypes) {
    PushNotificationTypes[PushNotificationTypes["None"] = 0] = "None";
    PushNotificationTypes[PushNotificationTypes["MeetingCreated"] = 1] = "MeetingCreated";
    PushNotificationTypes[PushNotificationTypes["UserJoinedMeeting"] = 2] = "UserJoinedMeeting";
    PushNotificationTypes[PushNotificationTypes["UserLeftMeeting"] = 4] = "UserLeftMeeting";
    PushNotificationTypes[PushNotificationTypes["MeetingDeleted"] = 8] = "MeetingDeleted";
    PushNotificationTypes[PushNotificationTypes["ChatMessageCreated"] = 16] = "ChatMessageCreated";
    PushNotificationTypes[PushNotificationTypes["MeetingStartsSoon"] = 32] = "MeetingStartsSoon";
    PushNotificationTypes[PushNotificationTypes["CustomNotificationCreated"] = 64] = "CustomNotificationCreated";
    PushNotificationTypes[PushNotificationTypes["All"] = 127] = "All";
})(PushNotificationTypes = exports.PushNotificationTypes || (exports.PushNotificationTypes = {}));
var MeetingType;
(function (MeetingType) {
    MeetingType[MeetingType["GoogleMeet"] = 1] = "GoogleMeet";
    MeetingType[MeetingType["Offline"] = 2] = "Offline";
    MeetingType[MeetingType["Zoom"] = 3] = "Zoom";
})(MeetingType = exports.MeetingType || (exports.MeetingType = {}));
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
    CreateMeetingResult[CreateMeetingResult["CouldNotCreateMeetLink"] = 3] = "CouldNotCreateMeetLink";
    CreateMeetingResult[CreateMeetingResult["HasMeetingSameTime"] = 4] = "HasMeetingSameTime";
})(CreateMeetingResult = exports.CreateMeetingResult || (exports.CreateMeetingResult = {}));
var Sort;
(function (Sort) {
    Sort[Sort["Ascending"] = 1] = "Ascending";
    Sort[Sort["Descending"] = 2] = "Descending";
})(Sort = exports.Sort || (exports.Sort = {}));
var UpdateMeetingResult;
(function (UpdateMeetingResult) {
    UpdateMeetingResult[UpdateMeetingResult["Success"] = 1] = "Success";
    UpdateMeetingResult[UpdateMeetingResult["MeetingNotFound"] = 2] = "MeetingNotFound";
    UpdateMeetingResult[UpdateMeetingResult["UnauthorizedUserEditAction"] = 3] = "UnauthorizedUserEditAction";
    UpdateMeetingResult[UpdateMeetingResult["NoSlotsAvailable"] = 4] = "NoSlotsAvailable";
    UpdateMeetingResult[UpdateMeetingResult["HasMeetingSameTime"] = 5] = "HasMeetingSameTime";
})(UpdateMeetingResult = exports.UpdateMeetingResult || (exports.UpdateMeetingResult = {}));
