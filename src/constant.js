const PORT = 80

const PLUGIN_URL = '/plugin'
const PLUGIN_CONFIG_URL = '/plugin/config'
const PLUGIN_REGISTER_URL = '/plugin/register'
const PLUGIN_LOG_URL = '/plugin/log'

const EVENT_DATA = 'data'

const PARAMS_NAME = 'name'
const PARAMS_TARGET = 'target'
const PARAMS_DATA = 'data'

const PLUGIN_NAME = 'plugin_name'
const AUTHORIZATION = 'Authorization'

const ERROR_CODE_SUCCESS = 0
const ERROR_CODE_NOT_THIS_PLUGIN = -1
const ERROR_CODE_TOKEN_INVALID = -2
const ERROR_CODE_UNKNOWN = -3

const ERROR_MESSAGE_SUCCESS = 'success'
const ERROR_MESSAGE_NOT_THS_PLUGIN = 'not this plugin'
const ERROR_MESSAGE_TOKEN_INVALID = 'token not valid'

const CONTROL_PLANE_BASE_REQUEST_URL = (host, port, prefix) =>  `http://${host}:${port}${prefix}`

const LOG_LEVEL_DEBUG = 1
const LOG_LEVEL_INFO = 2
const LOG_LEVEL_WARN = 3
const LOG_LEVEL_ERROR = 4

export default {
    PORT,
    PLUGIN_URL,
    PLUGIN_CONFIG_URL,
    PLUGIN_REGISTER_URL,
    PLUGIN_LOG_URL,
    EVENT_DATA,
    PARAMS_NAME,
    AUTHORIZATION,
    PARAMS_TARGET,
    PARAMS_DATA,
    PLUGIN_NAME,
    ERROR_CODE_SUCCESS,
    ERROR_CODE_NOT_THIS_PLUGIN,
    ERROR_CODE_TOKEN_INVALID,
    ERROR_CODE_UNKNOWN,
    ERROR_MESSAGE_SUCCESS,
    ERROR_MESSAGE_NOT_THS_PLUGIN,
    ERROR_MESSAGE_TOKEN_INVALID,
    CONTROL_PLANE_BASE_REQUEST_URL,
    LOG_LEVEL_DEBUG,
    LOG_LEVEL_INFO,
    LOG_LEVEL_WARN,
    LOG_LEVEL_ERROR
}