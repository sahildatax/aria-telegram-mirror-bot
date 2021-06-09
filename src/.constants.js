module.exports = Object.freeze({
  TOKEN: '1654056742:AAF7dBK-MavEvuIn55ApjA0GOYp8oOa26-Q',
  ARIA_SECRET: 'myaria2',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/aria-telegram-mirror-bot/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '12wmpFiNifwLW9s0AFW97d3B2Z_0Vv-gB',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [830785064, 872830003],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001462185974],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['sumiit1304@gmail.com', 'sahilnolia@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@sahiltarxbot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: true,
  INDEX_DOMAIN: "http://mydrive.sahilnolia.workers.dev/1:/",
  TELEGRAPH_TOKEN: 'f5c975468deef0afed0dcbc96b60c1f919ed3d03c22a64ca3e21cf353ed2', // Telegraph token, if you want to show search results in telegra.ph else keep it blank,
  STOP_DUPLICATE_MIRRORS: true // To stop duplicate mirror
});
