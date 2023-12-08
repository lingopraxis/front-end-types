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
  DuplicateTopicName = 1013,
  IncrementalAuthInvalidEmail = 1014,
  DuplicateOrganizationName = 1015,
}

export interface ISocialSignUpResponse {
  /** @format int64 */
  id: number;
}

export interface ISocialSignUpRequest {
  languageId?: string;
  languageLevel?: LanguageLevel;
  userName?: string;
  tokenId: string;
  authCode: string;
  provider?: SocialLoginProvider;
  deviceType?: DeviceType;
  organization?: ICreateOrganization;
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
  Zoom = 3,
}

export enum DeviceType {
  None = 0,
  Android = 1,
  Ios = 2,
  Web = 3,
}

export interface ICreateOrganization {
  name?: string;
  description?: string;
  links?: string[];
  type?: OrganizationType;
}

export enum OrganizationType {
  Unknown = 0,
  LanguageSchool = 1,
  SpeakingClub = 2,
  EducationalInstitution = 3,
  CulturalCenter = 4,
  Other = 5,
}

export interface ISecurityTokens {
  accessToken: string;
  refreshToken: string;
}

export interface ISocialSignInRequest {
  tokenId?: string;
  authCode?: string;
  incrementalAuth?: boolean;
  provider?: SocialLoginProvider;
  deviceType?: DeviceType;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}

export interface IBroadcastMessageDto {
  /** @format int64 */
  id: number;
  name: string;
  englishTitle: string;
  russianTitle: string;
  englishText: string;
  russianText: string;
  isSent?: boolean;
  isReady?: boolean;

  /** @format date-time */
  lastMeetingCreatedAt?: string | null;

  /** @format date-time */
  lastParticipation?: string | null;
  practiceLanguageId?: string;
  practiceLanguageLevel?: LanguageLevel;
  platformsInUse?: PlatformsInUse;
}

export enum PlatformsInUse {
  None = 0,
  TelegramWebApp = 1,
  Ios = 2,
  Android = 4,
  Website = 8,
}

export interface ICountForBroadcastResponse {
  /** @format int32 */
  count?: number;
}

export interface IGetCountOfUsersByFilter {
  /** @format date-time */
  lastMeetingCreatedAt?: string | null;

  /** @format date-time */
  lastParticipation?: string | null;
  practiceLanguageId?: string;
  practiceLanguageLevel?: LanguageLevel;
  platformsInUse?: PlatformsInUse;
}

export interface ICreateBroadcastMessageResponse {
  /** @format int64 */
  id: number;
}

export type ICreateBroadcastMessageRequest = IApiCreateBroadcastMessageDto & object;

export interface IApiCreateBroadcastMessageDto {
  name: string;
  englishTitle: string;
  russianTitle: string;
  englishText: string;
  russianText: string;
  isReady?: boolean;

  /** @format date-time */
  lastMeetingCreatedAt?: string | null;

  /** @format date-time */
  lastParticipation?: string | null;
  practiceLanguageId?: string;
  practiceLanguageLevel?: LanguageLevel;
  platformsInUse?: PlatformsInUse;
}

export type IUpdateBroadcastMessageRequest = IBroadcastMessageDto & object;

export interface ITimeZoneDetails {
  timeZoneName?: string;
  offset?: string;
}

export interface ICreateFeedbackRequest {
  text: string;
}

export interface IImage {
  /** @format int64 */
  id?: number;
  linkPreview?: string;
  linkHero?: string;
  linkOriginal?: string;
}

export interface ILanguage {
  id: string;
  name: string;
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

export interface IPaginationParams {
  /** @format int32 */
  offset: number;

  /** @format int32 */
  limit: number;
}

export interface ICreateMeetingChatMessageRequest {
  /** @format int64 */
  meetingId: number;
  text: string;
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
  customMeetingInfo?: ICustomMeetingInfo;
  type: MeetingType;
  meetingLink?: string;
}

export interface IParticipant {
  /** @format int64 */
  userId: number;
  gender?: Gender | null;
  username: string;
  country: string;
  aboutMe?: string;

  /** @format date-time */
  createdAt?: string;
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
  gender?: Gender;
  countryName?: string;
  practiceLanguage?: ILanguage;
  interfaceLanguage: ILanguage;
  timeZoneId?: string;
  city?: string;
  languageLevel?: LanguageLevel;
  userGoogleInfo?: IUserGoogleInfo;
  userZoomInfo?: IUserZoomInfo;
  username: string;
  webAppPushNotificationTypes: PushNotificationTypes;
  mobileAppPushNotificationTypes: PushNotificationTypes;
  email: string;
  hasPushNotificationToken: boolean;
  organization?: IOrganization;

  /** @format date-time */
  registeredAt?: string;
  aboutMe?: string;
  role?: UserRole;
}

export interface IUserGoogleInfo {
  authorizedWithGoogle: boolean;
  hasCalendarPermission: boolean;
}

export interface IUserZoomInfo {
  authorized: boolean;
}

export enum PushNotificationTypes {
  None = 0,
  MeetingCreated = 1,
  UserJoinedMeeting = 2,
  UserLeftMeeting = 4,
  MeetingDeleted = 8,
  ChatMessageCreated = 16,
  MeetingStartsSoon = 32,
  CustomNotificationCreated = 64,
  MeetingUpdated = 128,
  All = 255,
}

export interface IOrganization {
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
  image?: IImage;
  links?: string[];
  type?: OrganizationType;
}

export enum UserRole {
  None = 0,
  Moderator = 1,
  Admin = 2,
  SuperAdmin = 4,
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

export interface ICustomMeetingInfo {
  platform?: string;
  link?: string;
  connectionNotes?: string;
}

export enum MeetingType {
  None = 0,
  GoogleMeet = 1,
  Offline = 2,
  Zoom = 4,
  Custom = 8,
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
  sort?: MeetingSort | null;
  withFreePlacesOnly?: boolean | null;
}

export enum MeetingSort {
  ClosestAtTheTop = 1,
  FreeAtTop = 2,
}

export interface IJoinMeetingResponse {
  result: UpdateAttendeesResult;
}

export enum UpdateAttendeesResult {
  Success = 1,
  AllSeatsAreTaken = 2,
  HasMeetingSameTime = 3,
  AlreadyInProgressOrEnded = 4,
  Canceled = 5,
  TokenHasBeenExpiredOrRevoked = 6,
  CouldNotJoinToMeeting = 7,
}

export interface IJoinMeetingRequest {
  /** @format int64 */
  meetingId: number;
}

export interface ILeaveMeetingResponse {
  leaveMeetingResult: LeaveMeetingResult;
}

export enum LeaveMeetingResult {
  Success = 1,
  TokenHasBeenExpiredOrRevoked = 2,
  CouldNotRemoveMeeting = 3,
  CouldNotLeaveMeeting = 4,
  MeetingNotFound = 5,
}

export interface ICreateMeetingResponse {
  /** @format int64 */
  id?: number;
  meetLink?: string;
  type?: MeetingType;
  createMeetingResult: CreateMeetingResult;
}

export enum CreateMeetingResult {
  Success = 1,
  TokenHasBeenExpiredOrRevoked = 2,
  CouldNotCreateMeetLink = 3,
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
  customMeetingInfo?: ICustomMeetingInfo;
  comment?: string;
  topicName: string;
  topicDescription?: string;
}

export interface IGetMeetingDatesRequest {
  languageId: string;
  languageLevel?: LanguageLevel | null;

  /** @format date-time */
  from: string;

  /** @format date-time */
  to?: string | null;
}

export interface IGetMyMeetingsRequest {
  page?: IPaginationParams;
  onlyPast?: boolean;
  languageId?: string;
  languageLevel?: LanguageLevel | null;

  /** @format date-time */
  from?: string | null;
  type?: MeetingType | null;

  /** @format date-time */
  to?: string | null;
  sort?: Sort;
}

export enum Sort {
  Ascending = 1,
  Descending = 2,
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
  TokenHasBeenExpiredOrRevoked = 6,
  CouldNotUpdateMeeting = 7,
}

export interface IUpdateMeetingRequest {
  /** @format int64 */
  meetingId: number;

  /** @format date-time */
  meetingAt?: string;

  /** @format int32 */
  peopleNumber?: number;
  comment?: string;
  topicName?: string;
  topicDescription?: string;
  customMeetingInfo?: ICustomMeetingInfo;
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

export interface IPushNotificationSchedulePreference {
  /** @format int64 */
  id?: number;
  isEnabled?: boolean;
  isChatAlertsAnyTime?: boolean;

  /** @format time */
  notifyFrom?: string;

  /** @format time */
  notifyTo?: string;
  notificationDays?: NotificationDays;
}

export enum NotificationDays {
  None = 0,
  Sunday = 1,
  Monday = 2,
  Tuesday = 4,
  Wednesday = 8,
  Thursday = 16,
  Friday = 32,
  Saturday = 64,
  All = 127,
}

export interface IProblemDetails {
  type?: string | null;
  title?: string | null;

  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export interface IUpdateNotificationSchedulePreference {
  isEnabled: boolean;
  isChatAlertsAnyTime: boolean;

  /** @format time */
  notifyFrom: string;

  /** @format time */
  notifyTo: string;
  notificationDays: NotificationDays;
}

export interface IUpdateOrganization {
  name: string;
  description?: string;
  links?: string[];
  type: OrganizationType;

  /** @format int64 */
  imageId?: number | null;
}

export interface ISubscribeToPushNotificationsRequest {
  token: string;
}

export interface ITestPushNotificationsCommand {
  type?: PushNotificationTypes;
}

export interface IBroadcastMessageRequest {
  notification?: ICustomNotificationCreatedPushNotification;
}

export interface ICustomNotificationCreatedPushNotification {
  messages: Record<string, ICustomMessage>;

  /** @format date-time */
  sentTime: string;
  testUserIds: number[];
}

export interface ICustomMessage {
  title: string;
  message: string;
}

export interface ITopic {
  /** @format int64 */
  id: number;
  name: string;
  description?: string;
  questions?: string[];
  tags?: ITag[];
}

export interface ITag {
  /** @format int64 */
  id: number;
  name: string;
}

export interface IAddQuestionsToTopicRequest {
  questions: string[];

  /** @format int64 */
  topicId: number;
}

export interface ISearchTopicsRequest {
  name?: string;
  page: IPaginationParams;
  tagIds?: number[];
}

export interface ICreateTopicResponse {
  /** @format int64 */
  id: number;
}

export interface ICreateTopicRequest {
  name: string;
  questions: string[];
}

export interface IStatistic {
  statisticByLanguages?: IStatisticByLanguage[];

  /** @format int32 */
  interlocutorCount?: number;

  /** @format int32 */
  messagesWrittenCount?: number;

  /** @format int32 */
  topicOfferCount?: number;
}

export interface IStatisticByLanguage {
  languageId?: string;

  /** @format int32 */
  createdMeetingsCount?: number;

  /** @format int32 */
  meetingsCount?: number;
}

export interface IUpdateUserRequest {
  gender?: Gender;
  practiceLanguageId?: string;
  languageLevel?: LanguageLevel;
  username?: string;
  aboutMe?: string;
  countryName?: string;
  interfaceLanguageId: string;
  timeZoneId?: string;
  city?: string;
  mobileAppPushNotificationTypes?: PushNotificationTypes | null;
  webAppPushNotificationTypes?: PushNotificationTypes | null;
  isOrganization?: boolean;
}

export interface ILogInInfo {
  logInUrl: string;
  requestId: string;
}

export enum LogInRequestType {
  Google = 1,
  Zoom = 2,
}

export type IMeetingCreatedPushNotification = IPushNotificationBase & { meetingDate: string; userCreatorId: number };

export interface IPushNotificationBase {
  /** @format int64 */
  meetingId: number;
  languageId: string;
  languageLevel: string;
  topicName: string;

  /** @format date-time */
  sentTime: string;
}

export type IMessageCreatedPushNotification = IPushNotificationBase & { actorUserName: string; message: string };

export type IUserJoinedMeetingPushNotification = IPushNotificationBase & { actorUserName: string };

export type IUserLeftMeetingPushNotification = IPushNotificationBase & { actorUserName: string };

export type IMeetingStartsSoonNotification = IPushNotificationBase & { meetingDate: string };

export type IUserDeletedMeetingPushNotification = IPushNotificationBase & {
  meetingDate: string;
  actorUserName: string;
};
