export interface IApplicationError {
  code: ApplicationErrorCode;
  message: string;
}

export enum ApplicationErrorCode {
  None = 0,
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
  DuplicateBannerLocalization = 1016,
  BlockUserError = 1017,
  UnblockUserError = 1018,
  AccountAlreadyInUse = 1019,
  TooManyRequests = 1020,
  ParticipationLimit = 1021,
  DuplicateTagName = 1022,
  CheckLimitHasBeenReached = 1023,
  DuplicateBot = 1024,
  NotEnoughRights = 1025,
}

export interface IProblemDetails {
  type?: string | null;
  title?: string | null;

  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export interface IReferralCodeUsingResponse {
  code?: string;
  users?: IReferralCodeUsersStat[];
  purchases?: IReferralCodePurchasesStat[];
}

export interface IReferralCodeUsersStat {
  /** @format date */
  dateTime?: string;

  /** @format int32 */
  count?: number;
}

export interface IReferralCodePurchasesStat {
  /** @format date */
  dateTime?: string;
  purchases?: Record<string, number>;
}

export interface IVerifyAppleSubscription {
  /** @format int64 */
  originalTransactionId: number;
  productId?: string;
}

export interface IRecoverSubscriptions {
  originalTransactionIds: number[];
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
  ageGroup?: AgeGroup;
  gender?: Gender;

  /** @format int64 */
  imageId?: number | null;
}

export enum LanguageLevel {
  None = 0,
  Beginner = 1,
  PreIntermediate = 2,
  Intermediate = 4,
  UpperIntermediate = 8,
  Advanced = 16,
  Proficiency = 32,
  All = 63,
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

export enum AgeGroup {
  None = 0,
  Under18 = 1,
  Between18And24 = 2,
  Between25And34 = 3,
  Between35And44 = 4,
  Between45And54 = 5,
  Between55And64 = 6,
  Over65 = 7,
}

export enum Gender {
  NotSet = 1,
  Male = 2,
  Female = 3,
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

export interface IApplyReferralCodeResponse {
  status?: ReferralProgramStatus;
}

export enum ReferralProgramStatus {
  Succeeded = 1,
  AlreadyUsed = 2,
  NotFound = 3,
  InProgress = 4,
}

export interface IApplyReferralCodeRequest {
  referralCode: string;
}

export interface IBannerLocalized {
  /** @format int64 */
  bannerId: number;

  /** @format int64 */
  id: number;
  url: string;
  languageId: string;
  title: string;
  body: string;
}

export interface IBanner {
  /** @format int64 */
  id: number;
  name: string;
  platformsInUse: PlatformsInUse;
  appVersion?: string;

  /** @format date-time */
  expirationDate?: string | null;
  bannerLocalized?: IBannerLocalized[];
  callToAction?: string;
  countryCode?: string;
}

export enum PlatformsInUse {
  None = 0,
  TelegramWebApp = 1,
  Ios = 2,
  Android = 4,
  Website = 8,
  VkWebApp = 16,
}

export interface IUpdateBannerRequest {
  /** @format int64 */
  id: number;
  name: string;
  platformsInUse?: PlatformsInUse;

  /** @format date-time */
  expirationDate?: string | null;
  appVersion?: string;
  callToAction?: string;
  countryCode?: string;
}

export type IUpdateBannerLocalizedRequest = IBannerLocalized & object;

export interface IBlockedUser {
  /** @format int64 */
  userId?: number;

  /** @format int64 */
  blockedUserId?: number;
  blockedUsername?: string;
}

export interface IBroadcastMessageDto {
  /** @format int64 */
  id: number;
  name: string;
  messagesLocalized: Record<string, IBroadcastMessageLocalized>;
  isSent?: boolean;
  isReady?: boolean;

  /** @format date-time */
  lastMeetingCreatedAt?: string | null;

  /** @format date-time */
  lastParticipation?: string | null;
  practiceLanguageId?: string;
  practiceLanguageLevel?: LanguageLevel;
  platformsInUse?: PlatformsInUse;
  button?: IButton;
  countryCode?: string;
  webapp?: string;
  image?: IImage;
}

export interface IBroadcastMessageLocalized {
  title: string;
  text: string;
}

export interface IButton {
  message?: string;
  link?: string;
}

export interface IImage {
  /** @format int64 */
  id?: number;
  name?: string;
  linkPreview?: string;
  linkHero?: string;
  linkOriginal?: string;
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
  countryCode?: string;
  webapp?: string;
}

export interface ICreateBroadcastMessageResponse {
  /** @format int64 */
  id: number;
}

export type ICreateBroadcastMessageRequest = IApiCreateBroadcastMessageDto & object;

export interface IApiCreateBroadcastMessageDto {
  name: string;
  messagesLocalized: Record<string, IBroadcastMessageLocalized>;
  isReady?: boolean;

  /** @format date-time */
  lastMeetingCreatedAt?: string | null;

  /** @format date-time */
  lastParticipation?: string | null;
  practiceLanguageId?: string;
  practiceLanguageLevel?: LanguageLevel;
  platformsInUse?: PlatformsInUse;
  button?: IButton;
  countryCode?: string;
  webapp?: string;

  /** @format int64 */
  imageId?: number | null;
}

export type IUpdateBroadcastMessageRequest = IApiCreateBroadcastMessageDto & { id?: number };

export interface ITimeZoneDetails {
  timeZoneName?: string;
  offset?: string;
}

export interface ICreateFeedbackRequest {
  text: string;
}

export interface IFile {
  utF8NoBOM?: IEncoding;
}

export interface IEncoding {
  default?: IEncoding;
  preamble?: IReadOnlySpanOfByte;
  bodyName?: string;
  encodingName?: string;
  headerName?: string;
  webName?: string;

  /** @format int32 */
  windowsCodePage?: number;
  isBrowserDisplay?: boolean;
  isBrowserSave?: boolean;
  isMailNewsDisplay?: boolean;
  isMailNewsSave?: boolean;
  isSingleByte?: boolean;
  encoderFallback?: IEncoderFallback;
  decoderFallback?: IDecoderFallback;
  isReadOnly?: boolean;
  ascii?: IEncoding;
  latin1?: IEncoding;

  /** @format int32 */
  codePage?: number;
  isUTF8CodePage?: boolean;
  unicode?: IEncoding;
  bigEndianUnicode?: IEncoding;
  utF7?: IEncoding;
  utF8?: IEncoding;
  utF32?: IEncoding;
  bigEndianUTF32?: IEncoding;
}

export interface IReadOnlySpanOfByte {
  item?: IByte;

  /** @format int32 */
  length?: number;
  isEmpty?: boolean;
  empty?: IReadOnlySpanOfByte;
}

export type IByte = object;

export interface IEncoderFallback {
  replacementFallback?: IEncoderFallback;
  exceptionFallback?: IEncoderFallback;

  /** @format int32 */
  maxCharCount?: number;
}

export interface IDecoderFallback {
  replacementFallback?: IDecoderFallback;
  exceptionFallback?: IDecoderFallback;

  /** @format int32 */
  maxCharCount?: number;
}

export interface IVerifyGooglePayment {
  purchaseToken?: string;
  productId?: string;
}

export interface ILanguage {
  id: string;
  name: string;
}

export interface IJoinMeetingToken {
  roomName: string;
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
  practiceType?: PracticeType;
  meetingLink?: string;

  /** @format int32 */
  duration?: number;
  preferVideo?: boolean;
  forPremiumUsersOnly?: boolean;

  /** @format double */
  priceUsd?: number | null;
}

export interface IParticipant {
  /** @format int64 */
  userId: number;
  gender?: Gender | null;
  username: string;
  isPlusUser?: boolean;
  country: string;
  countryCode?: string;
  aboutMe?: string;

  /** @format date-time */
  createdAt?: string;
  blocked?: boolean;
  isPaid?: boolean;

  /** @format int32 */
  commendations?: number;
  image?: IImage;
  isAccepted?: boolean;
  reviewed?: boolean;

  /** @format int32 */
  grade?: number;
  review?: string;
  ratedUserIds?: number[];
}

export interface IUser {
  /** @format int64 */
  id: number;

  /** @format int64 */
  telegramUserId?: number | null;
  lastSubscription?: IUserSubscription;

  /** @format date-time */
  trialExpirationDate?: string | null;
  isPlusUser?: boolean;
  userMeetingPackages?: IUserMeetingPackage[];

  /** @format int32 */
  practiceLimits?: number;

  /** @format date-time */
  nextFreePractice?: string;
  gender?: Gender;
  countryName?: string;
  countryCode?: string;
  practiceLanguage?: ILanguage;
  interfaceLanguage: ILanguage;
  timeZoneId?: string;
  city?: string;
  isBanned?: boolean;

  /** @format date-time */
  createdAt?: string;
  languageLevel?: LanguageLevel;
  userGoogleInfo?: IUserGoogleInfo;
  userZoomInfo?: IUserZoomInfo;
  userAppleInfo?: IUserAppleInfo;
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
  referralCode?: string;
  ageGroup?: AgeGroup;
  image?: IImage;
  mailingEnabled?: boolean;

  /** @format int32 */
  commendations?: number;
  needToCompleteSignup?: boolean;
}

export interface IUserSubscription {
  /** @format int64 */
  userId?: number;
  subscription?: ISubscription;
  paymentProvider?: PaymentProvider;

  /** @format date-time */
  expireAt?: string | null;

  /** @format date-time */
  cancellationDate?: string | null;

  /** @format int64 */
  providerPaymentId?: number | null;
  autoWithdrawal?: boolean;
  isTrial?: boolean;
}

export interface ISubscription {
  productId?: string;
  periodIdentifier?: PeriodIdentifier;
  name?: string;

  /** @format int32 */
  subscriptionPeriod?: number;
  prices?: Record<string, number>;
}

export enum PeriodIdentifier {
  None = 0,
  Day = 1,
  Week = 2,
  Month = 3,
}

export enum PaymentProvider {
  None = 0,
  ApplePay = 1,
  GooglePay = 2,
  YooKassa = 3,
  Gift = 4,
  Robokassa = 5,
  Telegram = 6,
}

export interface IUserMeetingPackage {
  /** @format int32 */
  amount: number;
  paymentType: PaymentType;
  provider: PaymentProvider;

  /** @format date-time */
  createdAt: string;
}

export enum PaymentType {
  None = 0,
  Purchase = 1,
  Trial = 2,
}

export interface IUserGoogleInfo {
  authorizedWithGoogle: boolean;
  hasCalendarPermission: boolean;
  email?: string;

  /** @format date-time */
  createdAt?: string | null;
}

export interface IUserZoomInfo {
  authorized: boolean;
  email?: string;

  /** @format date-time */
  createdAt?: string | null;
}

export interface IUserAppleInfo {
  authorized: boolean;
  email?: string;

  /** @format date-time */
  createdAt?: string | null;
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
  MeetingCompleted = 256,
  AvailableSeats = 512,
  UserIsInactive = 1024,
  AcceptParticipation = 2048,
  All = 4095,
}

export interface IOrganization {
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
  links?: string[];
  type?: OrganizationType;
}

export enum UserRole {
  None = 0,
  Moderator = 1,
  Admin = 2,
  SuperAdmin = 4,
  Developer = 8,
  Financier = 16,
  ProductAnalyst = 32,
  InfluencerManager = 64,
}

export interface IMeetingAddress {
  /** @format int32 */
  version?: number;
  additionalInfo?: string;

  /** @format double */
  latitude?: number;

  /** @format double */
  longitude?: number;
  address?: string;
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
  Livekit = 16,
}

export enum PracticeType {
  SpeakingPrectice = 0,
  Discussion = 1,
}

export interface IGetLiveMeetingsRequest {
  languageId?: string;
  languageLevel?: LanguageLevel | null;
  page: IPaginationParams;
}

export interface IPaginationParams {
  /** @format int32 */
  offset: number;

  /** @format int32 */
  limit: number;
}

export interface ICreateLiveMeetingResponse {
  /** @format int64 */
  id?: number;
  createMeetingResult: CreateLiveMeetingResult;
}

export enum CreateLiveMeetingResult {
  Success = 1,
  HasActiveLiveMeeting = 2,
  AvailableOnlyForPremiumUser = 3,
}

export interface ICreateLiveMeetingRequest {
  languageId: string;
  languageLevel: LanguageLevel;

  /** @format int32 */
  peopleNumber: number;
  topicName: string;
  topicDescription?: string;
  forPremiumUsersOnly?: boolean;
  preferVideo?: boolean;
}

export enum JoinLiveMeetingResponse {
  Success = 1,
  AllSeatsAreTaken = 2,
  Canceled = 3,
  CouldNotJoinToMeeting = 4,
  AvailableOnlyForPremiumUser = 5,
}

export interface ISendGmailCommand {
  emailType?: EmailType;
}

export enum EmailType {
  UserSignedUp = 0,
  InactiveUser = 1,
}

export interface IChatMessage {
  /** @format int64 */
  id?: number;
  username?: string;

  /** @format int64 */
  userCreatorId?: number;

  /** @format int64 */
  meetingId?: number;
  text?: string;

  /** @format date-time */
  createdAt?: string;
  isInstantMeeting?: boolean;
}

export interface IGetMeetingChatMessagesQuery {
  paginationParams?: IPaginationParams;

  /** @format int64 */
  meetingId?: number;
  isInstantMeeting?: boolean;
}

export interface ICreateMeetingChatMessageRequest {
  /** @format int64 */
  meetingId: number;
  text: string;
  isInstantMeeting?: boolean;
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
  onlyPast?: boolean;
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
  NotEnoughCoins = 8,
  AvailableOnlyForPremiumUser = 9,
  TooFarAwayFromThePlace = 10,
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
  NotEnoughCoins = 5,
  AvailableOnlyForPremiumUser = 6,
}

export interface ICreateMeetingRequest {
  languageId: string;
  languageLevel: LanguageLevel;

  /** @format date-time */
  meetingAt: string;

  /** @format int32 */
  peopleNumber: number;
  type: MeetingType;
  practiceType?: PracticeType;
  address?: IMeetingAddress;
  customMeetingInfo?: ICustomMeetingInfo;
  comment?: string;
  topicName: string;
  topicDescription?: string;

  /** @format int32 */
  duration?: number;
  preferVideo?: boolean;
  forPremiumUsersOnly?: boolean;
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

  /** @format int32 */
  duration?: number;
  preferVideo?: boolean;
  comment?: string;
  topicName?: string;
  topicDescription?: string;
  customMeetingInfo?: ICustomMeetingInfo;
  practiceType?: PracticeType;
}

export interface IKickUserRequest {
  /** @format int64 */
  userIdToKick: number;

  /** @format int64 */
  meetingId: number;
}

export interface ISendMeetingReview {
  /** @format int64 */
  meetingId: number;

  /** @format int32 */
  grade?: number;
  review?: string;
  likeUserIds?: number[];
}

export type IMultipartFormDataContent = IHttpContent[];

export interface IHttpContent {
  headers?: IHttpContentHeaders;
  isBuffered?: boolean;
  allowDuplex?: boolean;
}

export type IHttpContentHeaders = IKeyValuePairOfStringAndIEnumerableOfString[] & {
  allow?: string[];
  contentDisposition?: IContentDispositionHeaderValue | null;
  contentEncoding?: string[];
  contentLanguage?: string[];
  contentLength?: number | null;
  contentLocation?: string | null;
  contentMD5?: string | null;
  contentRange?: IContentRangeHeaderValue | null;
  contentType?: IMediaTypeHeaderValue | null;
  expires?: string | null;
  lastModified?: string | null;
};

export interface IContentDispositionHeaderValue {
  dispositionType?: string;
  parameters?: INameValueHeaderValue[];
  name?: string | null;
  fileName?: string | null;
  fileNameStar?: string | null;

  /** @format date-time */
  creationDate?: string | null;

  /** @format date-time */
  modificationDate?: string | null;

  /** @format date-time */
  readDate?: string | null;

  /** @format int64 */
  size?: number | null;
}

export interface INameValueHeaderValue {
  name?: string;
  value?: string | null;
}

export interface IContentRangeHeaderValue {
  unit?: string;

  /** @format int64 */
  from?: number | null;

  /** @format int64 */
  to?: number | null;

  /** @format int64 */
  length?: number | null;
  hasLength?: boolean;
  hasRange?: boolean;
}

export interface IMediaTypeHeaderValue {
  charSet?: string | null;
  parameters?: INameValueHeaderValue[];
  mediaType?: string | null;
}

export interface IKeyValuePairOfStringAndIEnumerableOfString {
  key?: string;
  value?: string[];
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

  /** @format int32 */
  newMeetingMaxCount?: number;
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

export interface IUpdateNotificationSchedulePreference {
  isEnabled: boolean;
  isChatAlertsAnyTime: boolean;

  /** @format time */
  notifyFrom: string;

  /** @format time */
  notifyTo: string;
  notificationDays: NotificationDays;

  /** @format int32 */
  newMeetingMaxCount?: number;
}

export interface IGenerateQuestionsRequest {
  topicName: string;
  languageId: string;
  languageLevel: LanguageLevel;

  /** @format int32 */
  questionsNumber: number;
  additionalPrompts?: string;
}

export interface IUpdateOrganization {
  name: string;
  description?: string;
  links?: string[];
  type: OrganizationType;
}

export interface IMeetingPackage {
  productId: string;
  name: string;

  /** @format int32 */
  amount: number;
  prices: Record<string, number>;
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

export interface ICreateRobokassaPaymentResponse {
  link: string;

  /** @format int64 */
  paymentId: number;
}

export interface ICreateRobokassaPaymentRequest {
  productId: string;
}

export interface ITag {
  /** @format int64 */
  id: number;
  name: string;
}

export interface ISearchTagsRequest {
  name?: string;
}

export interface ICreateTagResponse {
  /** @format int64 */
  id: number;
}

export interface ICreateTagRequest {
  name?: string;
}

export interface ICreateTelegramPaymentResponse {
  link: string;

  /** @format int64 */
  paymentId: number;
}

export interface ICreateTelegramPaymentRequest {
  productId: string;
}

export interface ITopic {
  /** @format int64 */
  id: number;
  name: string;
  description?: string;
  questions?: string[];
  tags?: ITag[];
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

export interface ITelegramBotInfo {
  nickname: string;
  name?: string;
  token: string;
  description?: string;
  shortDescription?: string;
  botStatus?: BotStatus;

  /** @format int32 */
  numberOfUsers?: number;
  image?: IImage;
  meetingPackagePrices?: Record<string, number>;
  subscriptionPrices?: Record<string, number>;

  /** @format int32 */
  welcomeMeetingsBonus?: number;

  /** @format int32 */
  weeklyFreeMeetings?: number;
  forGlobalCommunity?: boolean;

  /** @format double */
  income?: number;
  notifyAboutPayments?: boolean;
  hardPaywal?: boolean;
  telegramStarsEnabled?: boolean;
  yooMoneyEnabled?: boolean;
}

export enum BotStatus {
  Activated = 0,
  DeactivatedByUser = 1,
  DeactivatedSetWeebHookFailure = 2,
  DeactivatedSendMessageFailure = 3,
}

export interface ICurrentBotInfo {
  nickname: string;
  name?: string;
  description?: string;
  shortDescription?: string;
  image?: IImage;

  /** @format int32 */
  welcomeMeetingsBonus?: number;

  /** @format int32 */
  weeklyFreeMeetings?: number;
  forGlobalCommunity?: boolean;
  hardPaywal?: boolean;
  telegramStarsEnabled?: boolean;
  yooMoneyEnabled?: boolean;
  isExternalBot?: boolean;
}

export interface IAddBotResponse {
  isSuccessful?: boolean;
}

export interface IAddBotRequest {
  name?: string;
  token: string;
  shortDescription?: string;
  description?: string;

  /** @format int64 */
  imageId?: number | null;
  meetingPackagePrices?: Record<string, number>;
  subscriptionPrices?: Record<string, number>;

  /** @format int32 */
  welcomeMeetingsBonus?: number;

  /** @format int32 */
  weeklyFreeMeetings?: number;
  forGlobalCommunity?: boolean;
  notifyAboutPayments?: boolean;
  hardPaywal?: boolean;
  telegramStarsEnabled?: boolean;
  yooMoneyEnabled?: boolean;
}

export interface IUpdateBotResponse {
  isSuccessful?: boolean;
  botStatus?: BotStatus;
}

export interface IUpdateBotRequest {
  nickname: string;
  name: string;
  shortDescription?: string;
  description?: string;

  /** @format int64 */
  imageId?: number | null;
  meetingPackagePrices?: Record<string, number>;
  subscriptionPrices?: Record<string, number>;

  /** @format int32 */
  welcomeMeetingsBonus?: number;

  /** @format int32 */
  weeklyFreeMeetings?: number;
  forGlobalCommunity?: boolean;
  notifyAboutPayments?: boolean;
  hardPaywal?: boolean;
  telegramStarsEnabled?: boolean;
  yooMoneyEnabled?: boolean;
}

export interface IDeleteBotCommand {
  nickname: string;
}

export interface ITelegramCommunityItem {
  /** @format int64 */
  id?: number;
  name?: string;
  type?: TelegramCommunityType;
  image?: IImage;
  interfaceLanguageId?: string;

  /** @format int64 */
  userCreatorTelegramId?: number | null;
  languagePreferences?: ILanguagePreference[];
  communityBots?: ICommunityBot[];
}

export enum TelegramCommunityType {
  Channel = 0,
  Group = 1,
  SuperGroup = 2,
  System = 3,
}

export interface ILanguagePreference {
  language: ILanguage;
  languageLevel: LanguageLevel;
}

export interface ICommunityBot {
  nickname: string;
  name?: string;
  image?: IImage;
  forGlobalCommunity?: boolean;
}

export interface IUpdateChannelRequest {
  /** @format int64 */
  id: number;
  name: string;

  /** @format int64 */
  imageId?: number | null;
  interfaceLanguageId: string;
  languagePreferences: ILanguagePreference[];
}

export interface IStatistic {
  statisticByLanguages?: IStatisticByLanguage[];

  /** @format int32 */
  interlocutorCount?: number;

  /** @format int32 */
  messagesWrittenCount?: number;

  /** @format int32 */
  topicOfferCount?: number;
  isPlusUser?: boolean;

  /** @format int32 */
  commendations?: number;
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
  countryCode?: string;
  countryName?: string;
  interfaceLanguageId: string;
  timeZoneId?: string;
  city?: string;
  mobileAppPushNotificationTypes?: PushNotificationTypes | null;
  webAppPushNotificationTypes?: PushNotificationTypes | null;
  isOrganization?: boolean;

  /** @format double */
  latitude?: number | null;

  /** @format double */
  longitude?: number | null;

  /** @format int64 */
  imageId?: number | null;
}

export enum LogInProviderType {
  Google = 1,
  Zoom = 2,
}

export interface ILogInInfo {
  logInUrl: string;
  requestId: string;
}

export interface ICreateYookassaPaymentResponse {
  link: string;

  /** @format int64 */
  paymentId: number;
}

export interface ICreateYookassaPaymentRequest {
  productId: string;
}

export interface IYookassaTransaction {
  /** @format int64 */
  id?: number;
  yookassaPaymentId?: string;

  /** @format int64 */
  userId?: number;
  productId?: string;
  status?: YookassaStatus;
  paid?: boolean;
}

export enum YookassaStatus {
  None = 0,
  WaitingForCapture = 1,
  Succeeded = 2,
  Canceled = 3,
  Pending = 4,
  Refund = 5,
}

export type IMeetingCreatedPushNotification = IPushNotificationPreferencesBase & object;

export type IPushNotificationPreferencesBase = IPushNotificationBase & { meetingDate: string; userCreatorId: number };

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
