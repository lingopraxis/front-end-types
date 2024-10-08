"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGN_UP_EVENTS = exports.DEEP_LINK_EVENTS = exports.PUSH_NOTIFICATION_EVENTS = exports.MEETING_EVENTS = exports.USER_EVENTS = exports.AnalyticsType = void 0;
var AnalyticsType;
(function (AnalyticsType) {
    AnalyticsType["USER"] = "user";
    AnalyticsType["MEETING"] = "meeting";
    AnalyticsType["PUSH_NOTIFICATION"] = "push_notification";
    AnalyticsType["DEEP_LINK"] = "deep_link";
    AnalyticsType["SIGN_UP"] = "sign_up";
})(AnalyticsType = exports.AnalyticsType || (exports.AnalyticsType = {}));
var USER_EVENTS;
(function (USER_EVENTS) {
    USER_EVENTS["SIGNUP"] = "signup";
    USER_EVENTS["LOGIN"] = "login";
    USER_EVENTS["LOG_OUT"] = "log_out";
    USER_EVENTS["DELETE_ACCOUNT"] = "delete_account";
    USER_EVENTS["SIGN_IN_ZOOM"] = "sign_in_zoom";
    USER_EVENTS["SIGN_IN_APPLE"] = "sign_in_apple";
    USER_EVENTS["SIGN_IN_GOOGLE"] = "sign_in_google";
    USER_EVENTS["UPDATE_INTERFACE_LANGUAGE"] = "update_interface_language";
    USER_EVENTS["UPDATE_PRACTICE_LANGUAGE"] = "update_practice_language";
    USER_EVENTS["UPDATE_PRACTICE_LEVEL"] = "update_practice_level";
    USER_EVENTS["UPDATE_GENDER"] = "update_gender";
    USER_EVENTS["UPDATE_NAME"] = "update_name";
    USER_EVENTS["UPDATE_LOCATION"] = "update_location";
    USER_EVENTS["UPDATE_ABOUT_ME_INFO"] = "update_about_me_info";
    USER_EVENTS["UPDATE_ORGANIZATION_DESCRIPTION"] = "update_organization_description";
    USER_EVENTS["UPDATE_ORGANIZATION_LINKS"] = "update_organization_links";
    USER_EVENTS["UPDATE_ORGANIZATION_NAME"] = "update_organization_name";
    USER_EVENTS["UPDATE_ORGANIZATION_TYPE"] = "update_organization_type";
    USER_EVENTS["CREATE_NOTIFICATION"] = "create_notification";
    USER_EVENTS["UPDATE_NOTIFICATION"] = "update_notification";
    USER_EVENTS["DELETE_NOTIFICATION"] = "delete_notification";
    USER_EVENTS["UPDATE_MOBILE_APP_PUSH_NOTIFICATIONS"] = "update_mobile_push_notifications";
    USER_EVENTS["UPDATE_WEB_APP_PUSH_NOTIFICATIONS"] = "update_web_app_push_notifications";
    USER_EVENTS["SUBSCRIBE_NOTIFICATIONS"] = "subscribe_notifications";
    USER_EVENTS["UPDATE_NOTIFICATION_SCHEDULE"] = "update_notification_schedule";
    USER_EVENTS["SEND_FEEDBACK"] = "send_feedback";
    USER_EVENTS["UPDATE_AND_SEND_BROADCAST_MESSAGE"] = "update_send_broadcast_msg";
    USER_EVENTS["UPDATE_AND_SAVE_BROADCAST_MESSAGE_DRAFT"] = "update_save_broadcast_msg_draft";
    USER_EVENTS["CREATE_AND_SEND_BROADCAST_MESSAGE"] = "create_send_broadcast_msg";
    USER_EVENTS["CREATE_AND_SAVE_BROADCAST_MESSAGE_DRAFT"] = "create_save_broadcast_msg_draft";
    USER_EVENTS["CREATE_TOPIC"] = "create_topic";
    USER_EVENTS["UPDATE_TOPIC_QUESTIONS"] = "update-topic-questions";
    USER_EVENTS["SEND_MESSAGE"] = "send_message";
    USER_EVENTS["GENERATE_TOPIC_QUESTIONS"] = "generate_topic_questions";
    USER_EVENTS["MARK_BANNER_WATCHED"] = "mark_banner_watched";
    USER_EVENTS["UNLINK_GOOGLE_ACCOUNT"] = "unlink_google_account";
    USER_EVENTS["UNLINK_ZOOM_ACCOUNT"] = "unlink_zoom_account";
    USER_EVENTS["RESTART_WALKTHROUGH"] = "restart_walkthru";
    USER_EVENTS["START_WALKTHROUGH_HOME"] = "start_walkthru_home";
    USER_EVENTS["STOP_WALKTHROUGH_HOME"] = "stop_walkthru_home";
    USER_EVENTS["WALKTHROUGH_HOME_APPEARED"] = "walkthru_home_appeared";
    USER_EVENTS["WALKTHROUGH_HOME_ENDED"] = "walkthru_home_ended";
    USER_EVENTS["RESTART_ENDED_WALKTHROUGH_HOME"] = "restart_ended_walkthru_home";
    USER_EVENTS["START_WALKTHROUGH_CREATE_MEETING"] = "start_walkthru_create_meet";
    USER_EVENTS["STOP_WALKTHROUGH_CREATE_MEETING"] = "stop_walkthru_create_meet";
    USER_EVENTS["WALKTHROUGH_CREATE_MEETING_APPEARED"] = "walkthru_create_meet_appeared";
    USER_EVENTS["WALKTHROUGH_CREATE_MEETING_ENDED"] = "walkthru_create_meet_ended";
    USER_EVENTS["RESTART_ENDED_WALKTHROUGH_CREATE_MEETING"] = "restart_ended_walkthru_create_meet";
    USER_EVENTS["BLOCK_USER"] = "block_user";
    USER_EVENTS["UNBLOCK_USER"] = "unblock_user";
    USER_EVENTS["PURCHASE"] = "purchase";
    USER_EVENTS["PURCHASE_MEETING_PACK"] = "purchase_meeting_pack";
    USER_EVENTS["COPY_REF_CODE"] = "copy_ref_code";
    USER_EVENTS["SHARE_REF_CODE"] = "share_ref_code";
    USER_EVENTS["WRITE_A_MESSAGE"] = "write_a_message";
})(USER_EVENTS = exports.USER_EVENTS || (exports.USER_EVENTS = {}));
var MEETING_EVENTS;
(function (MEETING_EVENTS) {
    MEETING_EVENTS["CREATE_MEETING"] = "create_meeting";
    MEETING_EVENTS["JOIN_MEETING"] = "join_meeting";
    MEETING_EVENTS["LEFT_MEETING"] = "left_meeting";
    MEETING_EVENTS["UPDATE_MEETING"] = "update_meeting";
    MEETING_EVENTS["OFFLINE_MEETING_CREATED"] = "offline_meeting_created";
    MEETING_EVENTS["GOOGLE_MEETING_CREATED"] = "google_meeting_created";
    MEETING_EVENTS["ZOOM_MEETING_CREATED"] = "zoom_meeting_created";
    MEETING_EVENTS["CUSTOM_MEETING_CREATED"] = "custom_meeting_created";
    MEETING_EVENTS["OPEN_GOOGLE_MEET_LINK"] = "open_google_meet_link";
    MEETING_EVENTS["OPEN_ZOOM_MEET_LINK"] = "open_zoom_meet_link";
    MEETING_EVENTS["OPEN_CUSTOM_MEET_LINK"] = "open_custom_meet_link";
    MEETING_EVENTS["OPEN_OFFLINE_MEET_MAP"] = "open_offline_meet_map";
    MEETING_EVENTS["CLICK_COPY_GOOGLE_MEET_LINK"] = "click_copy_google_meet_link";
    MEETING_EVENTS["CLICK_COPY_ZOOM_MEET_LINK"] = "click_copy_zoom_meet_link";
    MEETING_EVENTS["CLICK_COPY_CUSTOM_MEET_LINK"] = "click_copy_custom_meet_link";
    MEETING_EVENTS["CLICK_COPY_OFFLINE_MEET_INFO"] = "click_copy_offline_meet_info";
    MEETING_EVENTS["OPEN_MEET_PARTICIPANT_INFO"] = "open_meet_participant_info";
})(MEETING_EVENTS = exports.MEETING_EVENTS || (exports.MEETING_EVENTS = {}));
var PUSH_NOTIFICATION_EVENTS;
(function (PUSH_NOTIFICATION_EVENTS) {
    PUSH_NOTIFICATION_EVENTS["CLICK_MEET_CREATED"] = "click_meet_created";
    PUSH_NOTIFICATION_EVENTS["CLICK_MEET_DELETED"] = "click_meet_deleted";
    PUSH_NOTIFICATION_EVENTS["CLICK_MEET_UPDATED"] = "click_meet_updated";
    PUSH_NOTIFICATION_EVENTS["CLICK_MEET_STARTS_SOON"] = "click_meet_starts_soon";
    PUSH_NOTIFICATION_EVENTS["CLICK_MESSAGE_CREATED"] = "click_message_created";
    PUSH_NOTIFICATION_EVENTS["CLICK_USER_JOINED_MEET"] = "click_user_joined_meet";
    PUSH_NOTIFICATION_EVENTS["CLICK_USER_LEFT_MEET"] = "click_user_left_meet";
    PUSH_NOTIFICATION_EVENTS["CLICK_USER_CUSTOM_NOTIFICATION"] = "click_custom";
})(PUSH_NOTIFICATION_EVENTS = exports.PUSH_NOTIFICATION_EVENTS || (exports.PUSH_NOTIFICATION_EVENTS = {}));
var DEEP_LINK_EVENTS;
(function (DEEP_LINK_EVENTS) {
    DEEP_LINK_EVENTS["OPEN_MEET"] = "open_meet";
    DEEP_LINK_EVENTS["OPEN_APP_WITH_REF_CODE"] = "open_app_with_ref_code";
})(DEEP_LINK_EVENTS = exports.DEEP_LINK_EVENTS || (exports.DEEP_LINK_EVENTS = {}));
var SIGN_UP_EVENTS;
(function (SIGN_UP_EVENTS) {
    SIGN_UP_EVENTS["SELECT_GENDER"] = "select_gender";
    SIGN_UP_EVENTS["SELECT_AGE"] = "select_age";
    SIGN_UP_EVENTS["SELECT_LANGUAGE"] = "select_language";
    SIGN_UP_EVENTS["SELECT_LANGUAGE_LEVEL"] = "select_language_level";
    SIGN_UP_EVENTS["SELECT_PRACTICE_SCHEDULE"] = "select_practice_schedule";
    SIGN_UP_EVENTS["SKIP_PRACTICE_SCHEDULE"] = "skip_practice_schedule";
    SIGN_UP_EVENTS["ENABLE_NOTIFICATIONS"] = "enable_notifications";
    SIGN_UP_EVENTS["SKIP_NOTIFICATIONS"] = "skip_notifications";
    SIGN_UP_EVENTS["INSERT_USERNAME"] = "insert_username";
    SIGN_UP_EVENTS["CHOOSE_IMAGE"] = "choose_image";
    SIGN_UP_EVENTS["SELECT_IMAGE"] = "select_image";
    SIGN_UP_EVENTS["SKIP_IMAGE"] = "skip_image";
    SIGN_UP_EVENTS["CLICK_SIGN_UP"] = "click_sign_up";
    SIGN_UP_EVENTS["ERROR"] = "error";
})(SIGN_UP_EVENTS = exports.SIGN_UP_EVENTS || (exports.SIGN_UP_EVENTS = {}));
