export enum AnalyticsType {
    USER = 'user',
    MEETING = 'meeting',
    PUSH_NOTIFICATION = 'push_notification',
    DEEP_LINK= "deep_link"
}

export enum USER_EVENTS {
    SIGNUP = 'signup',
    LOGIN = 'login',
    LOG_OUT = 'log_out',
    DELETE_ACCOUNT = 'delete_account',
    SIGN_IN_ZOOM = 'sign_in_zoom',
    SIGN_IN_APPLE = 'sign_in_apple',
    SIGN_IN_GOOGLE = 'sign_in_google',

    UPDATE_INTERFACE_LANGUAGE = 'update_interface_language',
    UPDATE_PRACTICE_LANGUAGE = 'update_practice_language',
    UPDATE_PRACTICE_LEVEL = 'update_practice_level',
    UPDATE_GENDER = 'update_gender',
    UPDATE_NAME = 'update_name',
    UPDATE_LOCATION = 'update_location',
    UPDATE_ABOUT_ME_INFO = 'update_about_me_info',

    UPDATE_ORGANIZATION_DESCRIPTION = 'update_organization_description',
    UPDATE_ORGANIZATION_LINKS = 'update_organization_links',
    UPDATE_ORGANIZATION_NAME = 'update_organization_name',
    UPDATE_ORGANIZATION_TYPE = 'update_organization_type',

    CREATE_NOTIFICATION = 'create_notification',
    UPDATE_NOTIFICATION = 'update_notification',
    DELETE_NOTIFICATION = 'delete_notification',

    UPDATE_MOBILE_APP_PUSH_NOTIFICATIONS = 'update_mobile_push_notifications',
    UPDATE_WEB_APP_PUSH_NOTIFICATIONS = 'update_web_app_push_notifications',

    SUBSCRIBE_NOTIFICATIONS = 'subscribe_notifications',

    UPDATE_NOTIFICATION_SCHEDULE = 'update_notification_schedule',

    SEND_FEEDBACK = 'send_feedback',

    UPDATE_AND_SEND_BROADCAST_MESSAGE = 'update_send_broadcast_msg',
    UPDATE_AND_SAVE_BROADCAST_MESSAGE_DRAFT = 'update_save_broadcast_msg_draft',
    CREATE_AND_SEND_BROADCAST_MESSAGE = 'create_send_broadcast_msg',
    CREATE_AND_SAVE_BROADCAST_MESSAGE_DRAFT = 'create_save_broadcast_msg_draft',

    CREATE_TOPIC = 'create_topic',
    UPDATE_TOPIC_QUESTIONS = 'update-topic-questions',

    SEND_MESSAGE = 'send_message',

    GENERATE_TOPIC_QUESTIONS = 'generate_topic_questions',

    MARK_BANNER_WATCHED = 'mark_banner_watched',
    UNLINK_GOOGLE_ACCOUNT = 'unlink_google_account',
    UNLINK_ZOOM_ACCOUNT = 'unlink_zoom_account',

    RESTART_WALKTHROUGH = 'restart_walkthru',
    START_WALKTHROUGH_HOME = 'start_walkthru_home',
    STOP_WALKTHROUGH_HOME = 'stop_walkthru_home',
    WALKTHROUGH_HOME_APPEARED = 'walkthru_home_appeared',
    WALKTHROUGH_HOME_ENDED = 'walkthru_home_ended',
    RESTART_ENDED_WALKTHROUGH_HOME = 'restart_ended_walkthru_home',
    START_WALKTHROUGH_CREATE_MEETING = 'start_walkthru_create_meet',
    STOP_WALKTHROUGH_CREATE_MEETING = 'stop_walkthru_create_meet',
    WALKTHROUGH_CREATE_MEETING_APPEARED = 'walkthru_create_meet_appeared',
    WALKTHROUGH_CREATE_MEETING_ENDED = 'walkthru_create_meet_ended',
    RESTART_ENDED_WALKTHROUGH_CREATE_MEETING = 'restart_ended_walkthru_create_meet',
    CLICK_COPY_OFFLINE_MEET_INFO='click_copy_offline_meet_info',

    BLOCK_USER = 'block_user',
    UNBLOCK_USER = 'unblock_user'
}

export enum MEETING_EVENTS {
    CREATE_MEETING = 'create_meeting',
    JOIN_MEETING = 'join_meeting',
    LEFT_MEETING = 'left_meeting',
    UPDATE_MEETING = 'update_meeting',

    OFFLINE_MEETING_CREATED = 'offline_meeting_created',
    GOOGLE_MEETING_CREATED = 'google_meeting_created',
    ZOOM_MEETING_CREATED = 'zoom_meeting_created',
    CUSTOM_MEETING_CREATED = 'custom_meeting_created',

    OPEN_GOOGLE_MEET_LINK = 'open_google_meet_link',
    OPEN_ZOOM_MEET_LINK = 'open_zoom_meet_link',
    OPEN_CUSTOM_MEET_LINK = 'open_custom_meet_link',

    OPEN_OFFLINE_MEET_MAP = 'open_offline_meet_map',

    CLICK_COPY_GOOGLE_MEET_LINK = 'click_copy_google_meet_link',
    CLICK_COPY_ZOOM_MEET_LINK = 'click_copy_zoom_meet_link',
    CLICK_COPY_CUSTOM_MEET_LINK = 'click_copy_custom_meet_link',

    OPEN_MEET_PARTICIPANT_INFO = 'open_meet_participant_info',
}

export enum PUSH_NOTIFICATION_EVENTS {
    CLICK_MEET_CREATED = 'click_meet_created',
    CLICK_MEET_DELETED = 'click_meet_deleted',
    CLICK_MEET_UPDATED = 'click_meet_updated',
    CLICK_MEET_STARTS_SOON = 'click_meet_starts_soon',
    CLICK_MESSAGE_CREATED = 'click_message_created',
    CLICK_USER_JOINED_MEET = 'click_user_joined_meet',
    CLICK_USER_LEFT_MEET = 'click_user_left_meet',
    CLICK_USER_CUSTOM_NOTIFICATION = "click_custom"
}

export enum DEEP_LINK_EVENTS {
    OPEN_MEET = "open_meet",
}
