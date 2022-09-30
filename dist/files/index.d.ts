export interface ICreateAudioAttachmentCommandResult {
    /** @format int32 */
    duration?: number;
    /** @format int64 */
    id?: number;
    /** @format int64 */
    byteSize?: number;
    url?: string | null;
    /** @format date-time */
    creationDateTime?: string;
    fileName?: string | null;
}
export interface ICreateAvatarCommandResult {
    url?: string | null;
    previewUrl?: string | null;
    /** @format int64 */
    id?: number;
}
export interface ICreatePictureAttachmentCommandResult {
    previewUrl?: string | null;
    /** @format int64 */
    id?: number;
    /** @format int64 */
    byteSize?: number;
    url?: string | null;
    /** @format date-time */
    creationDateTime?: string;
    fileName?: string | null;
}
export interface ICreateRawAttachmentCommandResult {
    /** @format int64 */
    id?: number;
    /** @format int64 */
    byteSize?: number;
    url?: string | null;
    /** @format date-time */
    creationDateTime?: string;
    fileName?: string | null;
}
export interface ICreateVideoAttachmentCommandResult {
    /** @format int32 */
    duration?: number;
    firstFrameUrl?: string | null;
    /** @format int64 */
    id?: number;
    /** @format int64 */
    byteSize?: number;
    url?: string | null;
    /** @format date-time */
    creationDateTime?: string;
    fileName?: string | null;
}
export interface ICreateVoiceAttachmentCommandResult {
    /** @format int32 */
    duration?: number;
    /** @format int64 */
    id?: number;
    /** @format int64 */
    byteSize?: number;
    url?: string | null;
    /** @format date-time */
    creationDateTime?: string;
    fileName?: string | null;
}
