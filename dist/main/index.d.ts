export interface ISignUpWithGoogleCommandResponse {
    /** @format int64 */
    id: number;
}
export interface IApplicationError {
    code: ApplicationErrorCode;
    message: string;
}
export declare enum ApplicationErrorCode {
    BadRequest = 1000,
    Unauthorized = 1002,
    Forbidden = 1003,
    InternalServerError = 1004,
    GoogleAuthEmailNotVerified = 1005,
    DuplicateEmailAddress = 1006,
    UserNotRegistered = 1007,
    GoogleAuthIdTokenInvalid = 1008,
    LanguageDoesNotExist = 1009,
    CannotLeaveMeeting = 1010
}
export interface ISignUpWithGoogleRequest {
    languageId: string;
    languageLevel: LanguageLevel;
    userName: string;
    googleTokenId: string;
}
export declare enum LanguageLevel {
    None = 0,
    Beginner = 1,
    PreIntermediate = 2,
    Intermediate = 4,
    UpperIntermediate = 8,
    Advanced = 16,
    Proficiency = 32
}
export interface ISecurityTokens {
    accessToken: string;
    refreshToken: string;
}
export interface ISignInFromGoogleRequest {
    googleTokenId: string;
}
export interface IRefreshTokenRequest {
    refreshToken: string;
}
export interface IMeeting {
    /** @format int64 */
    id: number;
    /** @format date-time */
    meetingDate: string;
    participants: IParticipant[];
    /** @format int32 */
    maxParticipantsCount: number;
    topic: ITopic;
    userCreator: IUser;
    languageId: string;
    languageLevel: LanguageLevel;
    comment?: string;
    address?: IMeetingAddress;
    type: MeetingType;
}
export interface IParticipant {
    /** @format int64 */
    userId: number;
    gender?: Gender | null;
    firstName: string;
    country: string;
}
export declare enum Gender {
    NotSet = 1,
    Male = 2,
    Female = 3
}
export interface ITopic {
    /** @format int64 */
    id: number;
    name: string;
    description?: string;
    questions?: string[];
}
export interface IUser {
    /** @format int64 */
    telegramUserId: number;
    /** @format int64 */
    id: number;
    gender: Gender;
    countryName?: string;
    practiceLanguage: ILanguage;
    interfaceLanguage: ILanguage;
    timeZoneId?: string;
    city?: string;
    languageLevel: LanguageLevel;
    userGoogleInfo: IUserGoogleInfo;
    nickname: string;
    email: string;
}
export interface ILanguage {
    id: string;
    name: string;
}
export interface IUserGoogleInfo {
    authorizedWithGoogle: boolean;
    hasCalendarPermission: boolean;
}
export interface IMeetingAddress {
    /** @format int32 */
    version?: number;
    additionalInfo?: string;
    /** @format double */
    latitude?: number;
    /** @format double */
    longitude?: number;
}
export declare enum MeetingType {
    Online = 1,
    Offline = 2
}
export interface IGetMeetingsRequest {
    languageId?: string;
    languageLevel?: LanguageLevel | null;
    /** @format date-time */
    from?: string | null;
    type?: MeetingType | null;
    /** @format date-time */
    to?: string | null;
    page: IPaginationParams;
}
export interface IPaginationParams {
    /** @format int32 */
    offset: number;
    /** @format int32 */
    limit: number;
}
export interface IJoinMeetingResponse {
    result: JoinMeetingResult;
}
export declare enum JoinMeetingResult {
    Success = 1,
    AllSeatsAreTaken = 2,
    HasMeetingSameTime = 3,
    AlreadyInProgressOrEnded = 4,
    Canceled = 5
}
export interface IJoinMeetingRequest {
    /** @format int64 */
    meetingId: number;
}
/**
 * Represents a void type, since Void is not a valid return type in C#.
 */
export declare type IUnit = object;
export interface IGetMeetingDatesRequest {
    languageId: string;
    languageLevel?: LanguageLevel | null;
    /** @format date-time */
    from: string;
    /** @format date-time */
    to?: string | null;
}
export interface ICreateMeetingResponse {
    /** @format int64 */
    id?: number;
    googleMeetLink?: string;
    createMeetingResult: CreateMeetingResult;
}
export declare enum CreateMeetingResult {
    Success = 1,
    TokenHasBeenExpiredOrRevoked = 2,
    CouldNotCreateGoogleMeetLink = 3,
    HasMeetingSameTime = 4,
    UnknownError = 5
}
export interface ICreateMeetingRequest {
    languageId: string;
    languageLevel: LanguageLevel;
    /** @format date-time */
    meetingAt: string;
    /** @format int32 */
    peopleNumber: number;
    type: MeetingType;
    address?: IMeetingAddress;
    comment?: string;
    topicInformation: ITopicInformation;
}
export interface ITopicInformation {
    /** @format int64 */
    id?: number | null;
    name?: string;
    description?: string;
}
export interface IMeetingMetadata {
    url?: string;
}
export interface ISearchTopicsRequest {
    name?: string;
    page: IPaginationParams;
}
export interface ICreateTopicResponse {
    /** @format int64 */
    id: number;
}
export interface ICreateTopicRequest {
    name: string;
    questions: string[];
}
export interface IAddQuestionsToTopicRequest {
    questions: string[];
    /** @format int64 */
    topicId: number;
}
export interface ISubscribeToPushNotificationsRequest {
    token: string;
}
export interface IGoogleLogInInfo {
    logInUrl: string;
    requestId: string;
}
export interface IUpdateUserRequest {
    gender: Gender;
    countryName?: string;
    practiceLanguageId: string;
    interfaceLanguageId: string;
    languageLevel: LanguageLevel;
    timeZoneId?: string;
    city?: string;
    nickname?: string;
}
export interface IChatMessage {
    /** @format int64 */
    id: number;
    userCreatorName: string;
    /** @format int64 */
    userCreatorId: number;
    text: string;
    /** @format date-time */
    createdAt: string;
}
export interface IGetMeetingChatMessagesQuery {
    paginationParams?: IPaginationParams;
    /** @format int64 */
    meetingId?: number;
}
export interface ICreateMeetingChatMessageRequest {
    /** @format int64 */
    meetingId: number;
    text: string;
}
export interface INotificationPreferenceDto {
    /** @format int64 */
    id: number;
    languageId: string;
    languageLevel: LanguageLevel;
}
export interface ICreateNotificationPreference {
    languageId: string;
    languageLevel: LanguageLevel;
}
export interface IUpdateNotificationPreference {
    /** @format int64 */
    id: number;
    languageId: string;
    languageLevel: LanguageLevel;
}
