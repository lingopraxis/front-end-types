export interface IMeeting {
  /** @format int64 */
  id: number;

  /** @format date-time */
  meetingDate: string;
  googleMeetLink: string;

  /** @format int32 */
  maxParticipantsCount: number;

  /** @format int32 */
  participantsCount: number;
  topic: ITopic;
  userCreator: IUser;
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
  countryName: string;
  practiceLanguage: ILanguage;
  interfaceLanguage: ILanguage;
  languageLevel: LanguageLevel;
}

export enum Gender {
  NotSet = 1,
  Male = 2,
  Female = 3,
}

export interface ILanguage {
  id: string;
  name: string;
}

export enum LanguageLevel {
  Beginner = 1,
  PreIntermediate = 2,
  Intermediate = 3,
  UpperIntermediate = 4,
  Advanced = 5,
  Proficiency = 6,
}

export interface IGetMeetingsRequest {
  languageId?: string;
  languageLevel?: LanguageLevel | null;

  /** @format date-time */
  from?: string | null;

  /** @format int64 */
  userId?: number | null;
  page: IPaginationParams;
}

export interface IPaginationParams {
  /** @format int32 */
  offset: number;

  /** @format int32 */
  limit: number;
}

export interface IJoinMeetingResponse {
  isJoined: boolean;
}

export interface IJoinMeetingRequest {
  /** @format int64 */
  userId: number;

  /** @format int64 */
  meetingId: number;
}

export interface IGetMeetingDatesRequest {
  languageId: string;
  languageLevel: LanguageLevel;

  /** @format date-time */
  from: string;

  /** @format int64 */
  userId: number;
}

export interface ISearchTopicsRequest {
  page: IPaginationParams;
}

export interface IUpdateUserRequest {
  /** @format int64 */
  userId: number;
  gender: Gender;
  countryName: string;
  practiceLanguageId: string;
  interfaceLanguageId: string;
  languageLevel: LanguageLevel;
}
