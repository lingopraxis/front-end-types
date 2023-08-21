export interface ISocialSignUpResponse {
  /** @format int64 */
  id: number;
}

export interface IApplicationError {
  code: ApplicationErrorCode;
  message: string;
}

export enum ApplicationErrorCode {
  BadRequest = 1000,
  Unauthorized = 1002,
  Forbidden = 1003,
  InternalServerError = 1004,
  GoogleAuthEmailNotVerified = 1005,
  DuplicateEmailAddress = 1006,
  UserNotRegistered = 1007,
  GoogleAuthIdTokenInvalid = 1008,
  LanguageDoesNotExist = 1009,
  CannotLeaveMeeting = 1010,
  AppleAuthCodeInvalid = 1011,
  EntityNotFound = 1012,
}

export interface ISocialSignUpRequest {
  languageId: string;
  languageLevel: LanguageLevel;
  userName: string;
  tokenId: string;
  authCode: string;
  provider?: SocialLoginProvider;
  deviceType?: DeviceType;
}

export enum LanguageLevel {
  None = 0,
  Beginner = 1,
  PreIntermediate = 2,
  Intermediate = 4,
  UpperIntermediate = 8,
  Advanced = 16,
  Proficiency = 32,
}

export enum SocialLoginProvider {
  None = 0,
  Google = 1,
  Apple = 2,
}

export enum DeviceType {
  None = 0,
  Android = 1,
  Ios = 2,
  Web = 3,
}

export interface ISecurityTokens {
  accessToken: string;
  refreshToken: string;
}

export interface ISocialSignInRequest {
  tokenId: string;
  authCode?: string;
  incrementalAuth?: boolean;
  provider?: SocialLoginProvider;
  deviceType?: DeviceType;
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
  topicName: string;
  topicDescription?: string;
  userCreator: IUser;
  language: ILanguage;
  notificationsEnabled: boolean;
  languageLevel: LanguageLevel;
  comment?: string;
  address?: IMeetingAddress;
  type: MeetingType;
  meetingLink?: string;
}

export interface IParticipant {
  /** @format int64 */
  userId: number;
  gender?: Gender | null;
  username: string;
  country: string;
}

export enum Gender {
  NotSet = 1,
  Male = 2,
  Female = 3,
}

export interface IUser {
  /** @format int64 */
  id: number;

  /** @format int64 */
  telegramUserId?: number | null;
  gender: Gender;
  countryName?: string;
  practiceLanguage: ILanguage;
  interfaceLanguage: ILanguage;
  timeZoneId?: string;
  city?: string;
  languageLevel: LanguageLevel;
  userGoogleInfo?: IUserGoogleInfo;
  username: string;
  pushNotificationTypes: PushNotificationTypes;
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

export enum PushNotificationTypes {
  None = 0,
  MeetingCreated = 1,
  UserJoinedMeeting = 2,
  UserLeftMeeting = 4,
  MeetingDeleted = 8,
  ChatMessageCreated = 16,
  MeetingStartsSoon = 32,
  All = 63,
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

export enum MeetingType {
  Online = 1,
  Offline = 2,
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

export enum JoinMeetingResult {
  Success = 1,
  AllSeatsAreTaken = 2,
  HasMeetingSameTime = 3,
  AlreadyInProgressOrEnded = 4,
  Canceled = 5,
}

export interface IJoinMeetingRequest {
  /** @format int64 */
  meetingId: number;
}

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

export enum CreateMeetingResult {
  Success = 1,
  TokenHasBeenExpiredOrRevoked = 2,
  CouldNotCreateGoogleMeetLink = 3,
  HasMeetingSameTime = 4,
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
  topicName: string;
  topicDescription?: string;
}

export interface IMeetingMetadata {
  url?: string;
}

export interface IEditPushNotificationCommand {
  /** @format int64 */
  meetingId?: number;
  enabled?: boolean;
}

export interface IUpdateMeetingResponse {
  updateMeetingResult: UpdateMeetingResult;
}

export enum UpdateMeetingResult {
  Success = 1,
  MeetingNotFound = 2,
  UnauthorizedUserEditAction = 3,
  NoSlotsAvailable = 4,
  HasMeetingSameTime = 5,
}

export interface IUpdateMeetingRequest {
  /** @format int64 */
  meetingId: number;

  /** @format int64 */
  userId: number;
  languageId?: string;
  languageLevel?: LanguageLevel;

  /** @format date-time */
  meetingAt?: string;

  /** @format int32 */
  peopleNumber?: number;
  comment?: string;
  topicName?: string;
  topicDescription?: string;
}

export interface ITopic {
  /** @format int64 */
  id: number;
  name: string;
  description?: string;
  questions?: string[];
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
  username: string;
  pushNotificationTypes: PushNotificationTypes;
}

export interface IChatMessage {
  /** @format int64 */
  id: number;
  username: string;

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

export interface INotificationPreference {
  /** @format int64 */
  id: number;
  language: ILanguage;
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

export type IMeetingCreatedPushNotification = IPushNotificationBase & { meetingDate: string };

export interface IPushNotificationBase {
  /** @format int64 */
  meetingId: number;
  language: string;
  languageLevel: string;
  topicName: string;
}

export type IMessageCreatedPushNotification = IPushNotificationBase & { actorUserName: string; message: string };

export type IUserJoinedMeetingPushNotification = IPushNotificationBase & { actorUserName: string };

export type IUserLeftMeetingPushNotification = IPushNotificationBase & { actorUserName: string };

export type IMeetingStartsSoonNotification = IPushNotificationBase & { meetingDate: string };

export type IUserDeletedMeetingPushNotification = IPushNotificationBase & {
  meetingDate: string;
  actorUserName: string;
};
