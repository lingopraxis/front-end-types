"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInRequestType = exports.NotificationDays = exports.UpdateMeetingResult = exports.Sort = exports.CreateMeetingResult = exports.LeaveMeetingResult = exports.UpdateAttendeesResult = exports.MeetingSort = exports.MeetingType = exports.UserRole = exports.PushNotificationTypes = exports.Gender = exports.PlatformsInUse = exports.OrganizationType = exports.DeviceType = exports.SocialLoginProvider = exports.LanguageLevel = exports.ApplicationErrorCode = void 0;
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
    ApplicationErrorCode[ApplicationErrorCode["DuplicateTopicName"] = 1013] = "DuplicateTopicName";
    ApplicationErrorCode[ApplicationErrorCode["IncrementalAuthInvalidEmail"] = 1014] = "IncrementalAuthInvalidEmail";
    ApplicationErrorCode[ApplicationErrorCode["DuplicateOrganizationName"] = 1015] = "DuplicateOrganizationName";
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
    LanguageLevel[LanguageLevel["All"] = 63] = "All";
})(LanguageLevel = exports.LanguageLevel || (exports.LanguageLevel = {}));
var SocialLoginProvider;
(function (SocialLoginProvider) {
    SocialLoginProvider[SocialLoginProvider["None"] = 0] = "None";
    SocialLoginProvider[SocialLoginProvider["Google"] = 1] = "Google";
    SocialLoginProvider[SocialLoginProvider["Apple"] = 2] = "Apple";
    SocialLoginProvider[SocialLoginProvider["Zoom"] = 3] = "Zoom";
})(SocialLoginProvider = exports.SocialLoginProvider || (exports.SocialLoginProvider = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["None"] = 0] = "None";
    DeviceType[DeviceType["Android"] = 1] = "Android";
    DeviceType[DeviceType["Ios"] = 2] = "Ios";
    DeviceType[DeviceType["Web"] = 3] = "Web";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var OrganizationType;
(function (OrganizationType) {
    OrganizationType[OrganizationType["Unknown"] = 0] = "Unknown";
    OrganizationType[OrganizationType["LanguageSchool"] = 1] = "LanguageSchool";
    OrganizationType[OrganizationType["SpeakingClub"] = 2] = "SpeakingClub";
    OrganizationType[OrganizationType["EducationalInstitution"] = 3] = "EducationalInstitution";
    OrganizationType[OrganizationType["CulturalCenter"] = 4] = "CulturalCenter";
    OrganizationType[OrganizationType["Other"] = 5] = "Other";
})(OrganizationType = exports.OrganizationType || (exports.OrganizationType = {}));
var PlatformsInUse;
(function (PlatformsInUse) {
    PlatformsInUse[PlatformsInUse["None"] = 0] = "None";
    PlatformsInUse[PlatformsInUse["TelegramWebApp"] = 1] = "TelegramWebApp";
    PlatformsInUse[PlatformsInUse["Ios"] = 2] = "Ios";
    PlatformsInUse[PlatformsInUse["Android"] = 4] = "Android";
    PlatformsInUse[PlatformsInUse["Website"] = 8] = "Website";
})(PlatformsInUse = exports.PlatformsInUse || (exports.PlatformsInUse = {}));
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
    PushNotificationTypes[PushNotificationTypes["MeetingUpdated"] = 128] = "MeetingUpdated";
    PushNotificationTypes[PushNotificationTypes["All"] = 255] = "All";
})(PushNotificationTypes = exports.PushNotificationTypes || (exports.PushNotificationTypes = {}));
var UserRole;
(function (UserRole) {
    UserRole[UserRole["None"] = 0] = "None";
    UserRole[UserRole["Moderator"] = 1] = "Moderator";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["SuperAdmin"] = 4] = "SuperAdmin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var MeetingType;
(function (MeetingType) {
    MeetingType[MeetingType["None"] = 0] = "None";
    MeetingType[MeetingType["GoogleMeet"] = 1] = "GoogleMeet";
    MeetingType[MeetingType["Offline"] = 2] = "Offline";
    MeetingType[MeetingType["Zoom"] = 4] = "Zoom";
    MeetingType[MeetingType["Custom"] = 8] = "Custom";
})(MeetingType = exports.MeetingType || (exports.MeetingType = {}));
var MeetingSort;
(function (MeetingSort) {
    MeetingSort[MeetingSort["ClosestAtTheTop"] = 1] = "ClosestAtTheTop";
    MeetingSort[MeetingSort["FreeAtTop"] = 2] = "FreeAtTop";
})(MeetingSort = exports.MeetingSort || (exports.MeetingSort = {}));
var UpdateAttendeesResult;
(function (UpdateAttendeesResult) {
    UpdateAttendeesResult[UpdateAttendeesResult["Success"] = 1] = "Success";
    UpdateAttendeesResult[UpdateAttendeesResult["AllSeatsAreTaken"] = 2] = "AllSeatsAreTaken";
    UpdateAttendeesResult[UpdateAttendeesResult["HasMeetingSameTime"] = 3] = "HasMeetingSameTime";
    UpdateAttendeesResult[UpdateAttendeesResult["AlreadyInProgressOrEnded"] = 4] = "AlreadyInProgressOrEnded";
    UpdateAttendeesResult[UpdateAttendeesResult["Canceled"] = 5] = "Canceled";
    UpdateAttendeesResult[UpdateAttendeesResult["TokenHasBeenExpiredOrRevoked"] = 6] = "TokenHasBeenExpiredOrRevoked";
    UpdateAttendeesResult[UpdateAttendeesResult["CouldNotJoinToMeeting"] = 7] = "CouldNotJoinToMeeting";
})(UpdateAttendeesResult = exports.UpdateAttendeesResult || (exports.UpdateAttendeesResult = {}));
var LeaveMeetingResult;
(function (LeaveMeetingResult) {
    LeaveMeetingResult[LeaveMeetingResult["Success"] = 1] = "Success";
    LeaveMeetingResult[LeaveMeetingResult["TokenHasBeenExpiredOrRevoked"] = 2] = "TokenHasBeenExpiredOrRevoked";
    LeaveMeetingResult[LeaveMeetingResult["CouldNotRemoveMeeting"] = 3] = "CouldNotRemoveMeeting";
    LeaveMeetingResult[LeaveMeetingResult["CouldNotLeaveMeeting"] = 4] = "CouldNotLeaveMeeting";
    LeaveMeetingResult[LeaveMeetingResult["MeetingNotFound"] = 5] = "MeetingNotFound";
})(LeaveMeetingResult = exports.LeaveMeetingResult || (exports.LeaveMeetingResult = {}));
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
    UpdateMeetingResult[UpdateMeetingResult["TokenHasBeenExpiredOrRevoked"] = 6] = "TokenHasBeenExpiredOrRevoked";
    UpdateMeetingResult[UpdateMeetingResult["CouldNotUpdateMeeting"] = 7] = "CouldNotUpdateMeeting";
})(UpdateMeetingResult = exports.UpdateMeetingResult || (exports.UpdateMeetingResult = {}));
var NotificationDays;
(function (NotificationDays) {
    NotificationDays[NotificationDays["None"] = 0] = "None";
    NotificationDays[NotificationDays["Sunday"] = 1] = "Sunday";
    NotificationDays[NotificationDays["Monday"] = 2] = "Monday";
    NotificationDays[NotificationDays["Tuesday"] = 4] = "Tuesday";
    NotificationDays[NotificationDays["Wednesday"] = 8] = "Wednesday";
    NotificationDays[NotificationDays["Thursday"] = 16] = "Thursday";
    NotificationDays[NotificationDays["Friday"] = 32] = "Friday";
    NotificationDays[NotificationDays["Saturday"] = 64] = "Saturday";
    NotificationDays[NotificationDays["All"] = 127] = "All";
})(NotificationDays = exports.NotificationDays || (exports.NotificationDays = {}));
var LogInRequestType;
(function (LogInRequestType) {
    LogInRequestType[LogInRequestType["Google"] = 1] = "Google";
    LogInRequestType[LogInRequestType["Zoom"] = 2] = "Zoom";
})(LogInRequestType = exports.LogInRequestType || (exports.LogInRequestType = {}));
