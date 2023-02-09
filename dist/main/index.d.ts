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
    questions: string[];
}
export interface IUser {
    /** @format int64 */
    id: number;
    gender: Gender;
    countryName?: string;
    practiceLanguage: ILanguage;
    interfaceLanguage: ILanguage;
    timeZoneId?: string;
    city?: string;
    languageLevel: LanguageLevel;
    userGoogleInfo: IUserGoogleInfoDto;
    nickname: string;
    email: string;
}
export interface ILanguage {
    id: string;
    name: string;
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
export interface IUserGoogleInfoDto {
    authorizedWithGoogle: boolean;
    hasCalendarPermission: boolean;
}
export interface IGetMeetingsRequest {
    languageId?: string;
    languageLevel?: LanguageLevel | null;
    /** @format date-time */
    from?: string | null;
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
    id: number;
    googleMeetLink: string;
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
    /** @format int64 */
    topicId: number;
    /** @format int32 */
    peopleNumber: number;
}
export interface IMeetingMetadata {
    url?: string;
}
export interface ISearchTopicsRequest {
    name?: string;
    page: IPaginationParams;
}
export interface IGoogleLogInInfo {
    logInUrl: string;
}
export interface IUpdateUserRequest {
    /** @format int64 */
    userId: number;
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
