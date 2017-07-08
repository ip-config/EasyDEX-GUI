export const _lang = {
  'EN': {
    'INDEX': {
      'IMPORT': 'Import',
      'CHECK': 'Check',
      'VALIDATE': 'Validate',
      'COPY_TO_CLIPBOARD': 'Copy to clipboard',
      'EMPTY_DEBUG_LOG': 'Debug.log is empty',
      'RESTART': 'Restart',
      'WALLET_INFO': 'Wallet Info',
      'ADD_COIN': 'Add Coin',
      'STOP': 'Stop',
      'START': 'Start',
      'UPDATE_UTXO': 'Update UTXO',
      'ACTIVE_ADDRESS': 'active address',
      'FETCH_ALL_ADDR': 'Fetch (all addresses)',
      'NO_DATA': 'No history available',
      'LOADING_HISTORY': 'Loading transaction history',
      'FETCHING_NOTARIES_LIST': 'Fetching notaries list data',
      'TOTAL_NOTARIES': 'Notaries list. Total nodes count',
      'WAIT_UNTIL_SYNCED': 'Transactions history will be available shortly after blockchain data is synced',
      'CLOSE': 'Close',
      'SHOW': 'Show',
      'SHOWING': 'Showing',
      'OF': 'of',
      'TO_ALT': 'to',
      'SEARCH': 'Search',
      'PREVIOUS': 'Previous',
      'NEXT': 'Next',
      'ENTRIES_SM': 'entries',
      'SYNC_ERR_LONGESTCHAIN': 'Unable to get current sync progress. Err: no longestchain param in response',
      'SYNC_ERR_BLOCKS': 'Unable to get current sync progress. Err: no blocks param in response',
      'COIN_IS_BUSY': 'Coin is busy processing',
      'REFRESHING_BASILISK_NET': 'Refreshing Basilisk Network Connections',
      'SELECT_A_COIN': 'Select Coin to add to Agama Wallet',
      'WALLETS': 'Wallets',
      'ACTIVATE_COIN': 'Activate Coin',
      'WELCOME_PLEASE_ADD': 'Welcome. Please add coin to start.',
      'SELECT_SEED_TYPE': 'Please select compatible wallet seed type',
      'SELECT': '-Select-',
      'FULL_MODE': 'Full mode',
      'FULL_MODE_DESC': 'Adding a coin in Full mode will download its complete blockchain to your local machine. ' +
                        'This is the most optimum mode for performance, but will require higher system requirements to have one or multiple coins running in Full mode on your local machine.',
      'BASILISK_MODE': 'Basilisk Mode',
      'BASILISK_MODE_DESC': 'In Basilisk Mode, a coin will not download its Full blockchain to the local machine. ' +
                            'This mode is best if you have less disk space on your machine, or your system has slower performance. ' +
                            'It will be fully functional, but a bit slower to perform as compared to Full mode.',
      'NATIVE_MODE': 'Native Mode',
      'NATIVE_MODE_DESC1': 'This mode is ONLY available for KOMODO Coin, PAX FIAT Chains, Assetchains, and Geckochains. ' +
                           'This mode uses the',
      'NATIVE_MODE_DESC2': 'instead of the',
      'NATIVE_MODE_DESC3': 'to query blockchain data',
      'NATIVE_MODE_DESC4': 'is the so far mode which will allow you to do',
      'NATIVE_MODE_DESC5': 'Z Transactions',
      'NATIVE_MODE_DESC6': 'Private Transactions',
      'UNSUPPORTED_BROWSER': 'Uh Oh! Unsupported Web Browser :-(',
      'CLOSE': 'Close',
      'IE_UNSUPPORTED': 'The current version of Agama Wallet doesn\'t support Internet Explorer',
      'PLEASE_USE': 'Please use either',
      'OR': 'or',
      'TO_USE': 'to use',
      'PLEASE_CLICK_ON': 'Please click on browser\'s logo to visit website for installation instructions',
      'WELCOME_LOGIN': 'Welcome. Please login',
      'WALLET_SEED': 'Wallet Seed',
      'SIGN_IN': 'Sign in',
      'CREATE_WALLET': 'Create new wallet',
      'LOGIN_ANOTHER_WALLET': 'Login to another wallet',
      'CONFIRM_SEED': 'Confirm Wallet Seed',
      'REGISTER': 'Register',
      'BACK_TO_LOGIN': 'Back to Login',
      'TOGGLE_NAV': 'Toggle navigation',
      'TOGGLE_SEARCH': 'Toggle Search',
      'TOGGLE_MENUBAR': 'Toggle menubar',
      'SETTINGS': 'Settings',
      'ABOUT_IGUANA': 'About Iguana',
      'LOGOUT': 'Logout',
      'DASHBOARD': 'Dashboard',
      'WALLET_SETTINGS': 'Wallet Settings',
      'KMD_WALLET': 'Komodo Wallet',
      'ZC_WALLET': 'Zcash Wallet',
      'ACTIVE_COINS': 'Active Coins',
      'TRANSACTIONS': 'Transactions',
      'SEND': 'Send',
      'RECEIVE': 'Receive',
      'BUNDLES': 'Bundles',
      'BALANCES': 'Balances',
      'BALANCE': 'Balance',
      'VALIDATED': 'Validated',
      'NO_WALLET_CAPS': 'NO WALLET SELECTED',
      'PLEASE_SELECT_A_WALLET': 'Please select a wallet from active coins list on left',
      'ADDRESS': 'Address',
      'MY': 'My',
      'COPY': 'copy',
      'ACTIVATING_WALLET_RT': 'Activating wallet once Real Time blocks starts syncing...',
      'IGUANA_FULL_MODE_SYNC_P1': 'An Iguana Full Mode coin synchronizes the blockchain using an entirely different format than traditional blockchain software. ' +
                                  'Iguana\'s Full Mode uses Memory Mapped Files and stores data in bundles. ' +
                                  'That\'s why you see four different colored synchronizing progress bars.',
      'IGUANA_FULL_MODE_SYNC_P2': 'Once all these progress bars reach 100%, the Real Time blocks start synchronizing. ' +
                                  'Only after the Real Time sync mode activates will you be able to see current data in your wallet and make any transactions.',
      'IGUANA_FULL_MODE_SYNC_P3': 'Please wait for all other progress bars to disappear and the first blue bar turns to green.<br>' +
                                  'That would mean the wallet is in Real Time Sync mode.',
      'FETCHING_COIN_DATA': 'Fetching coin data from network. Please wait...',
      'INTEREST_EARNED': 'Interest Earned',
      'TOTAL_BALANCE': 'Total Balance',
      'FETCHING_BASILISK_DATA': 'Fetching Basilisk Data...',
      'GET_BALANCE': 'Get Balance',
      'REFRESH': 'Refresh',
      'LIST_UNSPENT': 'List Unspent',
      'LIST_TRANSACTIONS': 'List Transactions',
      'BASILISK_ACTIONS': 'Basilisk Actions',
      'GET_NOTARY_NODES_LIST': 'Get Notary Nodes List',
      'REFRESH_BASILISK_CONNECTIONS': 'Refresh Basilisk Connections',
      'FETCH_WALLET_DATA': 'Fetch Wallet Data',
      'REFETCH_WALLET_DATA': 'Reset Cache Data',
      'VIEW_CACHE_DATA': 'View Cache Data',
      'TRANSACTION_HISTORY': 'Transactions History',
      'DIRECTION': 'Direction',
      'CONFIRMATIONS': 'Confirmations',
      'AMOUNT': 'Amount',
      'TIME': 'Time',
      'DEST_ADDRESS': 'Dest. Address',
      'TX_DETAIL': 'Tx Detail',
      'FILL_SEND_FORM': 'Fill Send Form',
      'FILL_SEND_DETAILS': 'Fill sending transaction details',
      'CONFIRMING': 'Confirming',
      'CONFIRM_DETAILS': 'Confirm if details are correct',
      'PROCESSING_TX': 'Processing Tx',
      'PROCESSING_DETAILS': 'Processing and showing details',
      'SEND_FROM': 'Send From',
      'SEND_TO': 'Send To',
      'FEE': 'Fee',
      'TOTAL': 'Total',
      'AMOUNT_SM': 'amount',
      'DONT_SEND': 'Don\'t Send Transaction. Just give me signed transaction bytes.',
      'TO': 'To:',
      'TX_FEE_REQ': 'Transaction Fee (Required by miners)',
      'FROM': 'From:',
      'CONFIRM': 'Confirm',
      'BACK': 'Back',
      'TRANSACTION_RESULT': 'Transaction Result',
      'KEY': 'Key',
      'VALUE': 'Value',
      'INFO': 'Info',
      'MAKE_ANOTHER_TX': 'Make Another Transaction',
      'RECEIVING_ADDRESS': 'Receiving Addresses',
      'TYPE': 'Type',
      'INTEREST': 'Interest',
      'OOPS_ERROR': 'Opps! Something is not right...',
      'OOPS_ERROR_DESC': 'Could not connect to external wallet. Reasons can be:<br>' +
                         '- Your External Wallet/daemon isn\'t running<br>' +
                         '- Your External Wallet/daemon is running, but iguana is not given command to connect to External Wallet/daemon<br>' +
                         '- Your External Wallet/daemon is setup, but is not setup with config settings like<br>',
      'ACTIVATING_CHAIN': 'Activating best chain',
      'KMD_STARTED': 'Komodo daemon has been started and is processing.<br>' +
                     'Please wait while the best chain is being activated.',
      'CONNECTIONS': 'Connections',
      'TRANSPARENT_BALANCE': 'Transparent Balance',
      'Z_BALANCE': 'Private (Z) Balance',
      'INTEREST_EARNED': 'Interest Earned',
      'ZT_BALANCE': 'Total (Z+T) Balance',
      'GET_NEW_ADDRESS': 'Get New Address',
      'TRANSPARENT_ADDRESS': 'Transparent Address',
      'PRIVATE_Z_ADDRESS': 'Private (Z) Address',
      'OPERATIONS_STATUSES': 'Operations Statuses',
      'STATUS': 'Status',
      'RESULT': 'Result',
      'WALLET_INFO': 'Wallet Info',
      'WALLET_VERSION': 'Wallet Version',
      'UNCONFIRMED_BALANCE': 'Unconfirmed Balance',
      'IMMATURE_BALANCE': 'Immature Balance',
      'TOTAL_TX_COUNT': 'Total Transactions Count',
      'INFO': 'Info',
      'VERSION': 'Version',
      'PROTOCOL_VERSION': 'Protocol Version',
      'NOTARIZED': 'Notarized',
      'BLOCKS': 'Blocks',
      'DIFFICULTY': 'Difficulty',
      'PAY_TX_FEE': 'Pay Transaction Fee',
      'RELAY_FEE': 'Relay Fee',
      'ERRORS': 'Errors',
      'ADD_NODE': 'Add Node',
      'USE_THIS_SECTION': 'Use this section to check if the node IP you wish to add is allready active as peer of your coin:',
      'SELECT_COIN': '-Select Coin-',
      'CHECK_NODES': 'Check Nodes',
      'USE_THIS_SECTION_PEER': 'Use this section to add a peer IP to a selected coin:',
      'WALLET_BACKUP': 'Wallet Backup',
      'FIAT_CURRENCY': 'Fiat Currency',
      'EXPORT_KEYS': 'Export Keys',
      'ONLY_ACTIVE_WIF_KEYS': 'Only the active coin wallet wif keys will be shown here.<br>' +
                              'If you don\'t see a wif key for the coin you are looking for please active it by adding it from EasyDEX Dashboard.<br>' +
                              'You can use these wif keys to import to another coin wallets.',
      'PLEASE_KEEP_KEYS_SAFE': 'Please keep these keys extra safe and secure.',
      'PASSPHRASE': 'Passphrase',
      'GET_WIF_KEYS': 'Get Wif Keys',
      'IMPORT_KEYS': 'Import Keys',
      'IMPORT_KEYS_DESC_P1': 'This section allows you to import private key of all iguana supported coins, Assetchain, Geckochain, or PAXchain by the wallet.',
      'IMPORT_KEYS_DESC_P2': 'It is not mandatory to have that coin active in the wallet for which you are executing import private key process.',
      'IMPORT_KEYS_DESC_P3': 'You\'ll also notice the private key you imported for one coin or chain will also be showing a new address in all other coin wallets\' receiving address section. ' +
                 'It is normal.',
      'INPUT_PRIV_KEY': 'Input Private Key',
      'IMPORT_PRIV_KEY': 'Import Private Key',
      'DEBUG_LOG': 'Debug Log',
      'DEBUG_LOG_DESC': 'This section allows you to read last N lines from debug log file.',
      'DEBUG_LOG_LINES': 'Input number of lines to read',
      'TARGET': 'Target',
      'LOAD_DEBUG_LOG': 'Load debug log',
      'REFRESH_FUNDS': 'Refresh Funds',
      'INFO': 'Info',
      'ENTER': 'Enter',
      'ADDR_SM': 'address',
      'ACTIVATING': 'Activating'
    },
    'ATOMIC': {
      'RAW_OUTPUT': 'Raw Output',
      'SUBMIT': 'Submit',
      'INPUT_PLACEHOLDER': 'addr, txid, blockash etc.',
      'SELECT_COMMAND': 'Select Command',
    },
    'ADD_COIN': {
      'SYNC_ONLY': 'Sync only',
      'SAVE_SELECTION': 'Save Selection',
      'LOAD_SELECTION': 'Load Selection',
      'ACTIVATE_ALL': 'Activate all',
      'ADD_ANOTHER_COIN': 'Add another coin',
      'ALREADY_ADDED': 'is already added',
      'COIN_ALREADY_ADDED': 'Coin already added',
      'IN': 'in',
      'MODE': 'mode'
    },
    'JUMBLR': {
      'NOTICE': 'EXPERIMENTAL TEST VERSION ONLY',
      'DESCRIPTION': 'Jumblr feature is very experimental and for now, is Only enabled for testing and debugging.' +
                     'Please use the current version of Jumblr only with small amounts if you are participating in testing this feature.',
      'NEED_NATIVE': 'Need Native Mode Komodo',
      'TO_USE_JUMBLR': 'To use Jumblr feature, you need to activate Komodo in Native Mode.',
      'IF_YOU_ALREADY_RUNNING': 'If you are already running Komodo in either Basilisk Mode or Full Mode, close the wallet and restart again to start Komodo In Native Mode.',
      'THIS_SCREEN_DOESNT_REFRESH': 'This screen does not auto refresh. ' +
                'You will need to hit the Refresh button on the top right corner of the screen to get latest Jumblr data.',
      'FEW_SECURITY_NOTES': 'Few Security Notes for your Privacy and Anonymity of funds',
      'FEW_SECURITY_NOTES_DESC1': 'Jumblr addresses (BTC Jumbler and KMD Jumbler) addresses are your Private Addresses.',
      'FEW_SECURITY_NOTES_DESC2': 'DO NOT SHARE your Jumblr addresses with anyone.',
      'FEW_SECURITY_NOTES_DESC3': 'Jumblr addresses are like YOUR PASSWORD. Keep them safe, secure and hidden.',
      'FEW_SECURITY_NOTES_DESC4': 'Only YOU should know your Jumblr Address. Nobody else.',
      'FEW_SECURITY_NOTES_DESC5': 'Sharing your Jumblr Addresses with ANYONE will defeat the purpose of using Jumblr, and your funds and transactions will not be private anymore.',
      'ACCESS_JUMBLR_FUNDS': 'How to Access your Jumblr Funds',
      'ADDRESS_ACCESSIBLE_EASILY': 'Your Jumbler Addresses are accessible easily. For example you logged into your wallet with passphrase',
      'TO_ACCESS': 'To access your Jumbler address funds Logout.',
      'CLOSE_IAPP': 'Close Iguana App.',
      'START_IAPP': 'Start Iguana App again.',
      'START_KMD': 'Start Komodo in either Full Mode or Basilisk Mode.',
      'WORD_JUMBLR': 'Then add word \'jumblr \' before your passphrase.',
      'SMALL_LETTERS': '"jumblr" is all in small letters.',
      'WHITE_SPACE': 'There is a white space after "jumblr ".',
      'PER_EXAMPLE': 'So as per this example, your Jumbler Addresses are accessible with:',
      'LOGIN_WITH_JUMBLR': 'You\'ll login with your Jumblr passphrase to access funds and will be able to use it just like any other wallet address.',
      'AGAIN_DONT_SHARE': 'Again, DO NOT SHARE YOUR JUMBLR ADDRESS WITH ANYONE.',
      'USING_JUMBLR': 'Using Jumblr',
      'RUN_KMD': 'Run Komodo in Native Mode',
      'LOGIN_KMD': 'Login with your passphrase',
      'GO_TO': 'Go to Jumblr Menu',
      'FIND_DEPOSIT_ADDR': 'There find your Deposit Address for coin you want to anonymise your funds. (For a start only KMD is supported. BTC support will come in later versions)',
      'YOU_SEND_FUNDS': 'You send your funds to deposit address.',
      'KEEP_WALLET_OPEN': 'Keep your wallet open',
      'IMPORTANT_FUNDS': '[IMPORTANT] Funds are processed in lot sizes 100 KMD, 1000 KMD, and 10,000 KMD.',
      'LARGE_LOT': 'The large lot sizes will process first, and then smaller.',
      'EG': 'For example, you sent 1393 KMD to KMD Deposit Address.<br>' +
            'First it will process 1000 KMD<br>' +
            'then 100 KMD<br>' +
            'then 100 KMD<br>' +
            'then 100 KMD',
      '93_KMD': '93 KMD will keep waiting in deposit address.',
      'TO_CLEAR_THEM': 'To clear them you\'ll have to send 7 KMD more to your KMD Deposit Address.',
      'WHEN_IT_TOTALS': 'When it totals to 100 KMD, it will process to your KMD Jumblr Address.',
      'JADDR': 'Jumblr Addresses',
      'BTC_DEPOSIT': 'BTC Deposit',
      'SHOW_HIDE': 'Show/Hide',
      'HIDDEN': 'Hidden for security reason.',
      'KMD_DEPOSIT': 'KMD Deposit',
      'JSTATUS': 'Jumblr Status',
      'RESULT': 'Result',
      'DEPOSITED': 'Deposited',
      'PUB_TO_PRIV': 'Public to Private',
      'PRIV_TO_PRIV': 'Private to Private',
      'PRIV_TO_PUB': 'Private to Public',
      'FINISHED': 'Finished',
      'PENDING': 'Pending'
    },
    'DASHBOARD': {
      'SELECT_ADDRESS': '- Select Address -',
      'SEND_TOADDR_REQ': 'To Address is required.',
      'SEND_FROMADDR_REQ': 'From Address is required.',
      'SEND_AMOUNT_REQ': 'Please enter amount to send.',
      'SEND_FEE_REQ': 'Make sure you have fee entered. Default value is',
      'SEND_TOTAL_REQ': 'Make sure you have both amount and fee entered to calculate final total.',
      'SEND_TX_PROGRESS': 'The transaction submitted is processing. Once processed the transaction details will be displayed here.',
      'UNKNOWN': 'Unknown',
      'IN': 'IN',
      'OUT': 'OUT',
      'MINED': 'Mined',
      'IMMATURE': 'Immature',
      'ZADDR_NOT_LISTED': 'Z Address not listed by wallet',
      'ADDR_COPIED': 'Address Copied'
    },
    'TOASTR': {
      'WALLET_NOTIFICATION': 'Wallet Notification',
      'ACCOUNT_NOTIFICATION': 'Account Notification',
      'BASILISK_NOTIFICATION': 'Basilisk Notification',
      'COIN_NOTIFICATION': 'Coin Notification',
      'TX_NOTIFICATION': 'Transaction Notification',
      'SERVICE_NOTIFICATION': 'Service Notification',
      'LOGIN_NOTIFICATION': 'Login Notification',
      'SETTINGS_NOTIFICATION': 'Settings Notification',
      'RECADDR_UPDATED': 'Receiving Address list updated',
      'IGUANA_CONN_ERR': 'Unable to connect to Iguana',
      'FETCHING_DATA': 'Fetching Data. Please wait for a minute to complete this task.',
      'LESS_RESPONSES_REQ': 'Less than required responses. Please try again.',
      'LESS_RESPONSES_REQ_FOR': 'Less than required responses for',
      'BASILISK_CON_REFRESHED': 'Basilisk nodes connections refreshed',
      'SWITCHED_TO': 'switched to',
      'MODE': 'Mode',
      'TX_SENT': 'Transaction Sent',
      'TX_SEND_ERR': 'Unable to complete transaction',
      'LOOKS_LIKE': 'Looks like',
      'ALREADY_RUNNING': 'already running',
      'STARTED_IN': 'started in',
      'IGUANA_CONN_ERR_ALT': 'Unable to connect with iguana service. 127.0.0.1:7778',
      'KOMODO_ERR': 'Unable to start Komodod',
      'IGUANA_ARE_YOU_SURE': 'Are you sure Iguana is running?',
      'SIGNED_TX_GENERATED': 'Signed transaction generated',
      'SIGNED_TX_GENERATED_FAIL': 'Signed transaction Failed to generate',
      'SENDING_TX': 'Sending Transaction to Network',
      'SIGNED_TX_SENT': 'Signed transaction sent successfully',
      'GETTING_TXID_INFO': 'Getting txid info for updating funds data',
      'REFRESHING_FUNDS': 'Refreshing Wallet Funds',
      'TX_FAILED': 'Sent Transaction failed. Please check send Transaction page for details.',
      'TX_SENT_ALT': 'Transaction sent successfully. Check send section for details.',
      'COIN_STARTED': 'coin started',
      'ADDR_ALREADY_REG': 'address already registered on network.',
      'REG': 'Registered',
      'REG_ADDR': 'address on network.',
      'REG_ADDR_FAILED': 'address Registeration failed. Please try again.',
      'INVALID_QUERY': 'Invalid query sent for',
      'TRY_AGAIN': 'Please try again.',
      'ADDR_ISNT_REG': 'Address isn\'t Registered on Network. Please Register',
      'INVALID_QUERY_ALT': 'Invalid query sent. Please try again.',
      'VALIDATION_SUCCESS': 'Validation Success on Network',
      'KMD_NATIVE_CON_ERROR': 'Connection Error. Is external wallet running?',
      'KMD_IGUANA_CON_ERROR': 'Connection Error. Is iguana connected to external wallet?',
      'LOGIN_SUCCESSFULL': 'Login Successfull',
      'NO_COIN_RUNNING': 'Seems like there\'s no coin running. Activating BTC.',
      'OPPS': 'Opps... Something went wrong!',
      'INVALID_PASSPHRASE': 'Invalid Passphrase. Make sure your passphrase is correct, or create new wallet.',
      'WALLET_CREATED_SUCCESFULLY': 'Wallet created successfully',
      'LOGOUT_SUCCESSFULL': 'Logout Successfull',
      'WALLET_LOCKED': 'Wallet Locked Successfully',
      'PRIV_KEY_IMPORTED': 'Private Key Imported Successfully!',
      'PRIV_KEY_NOT_IMPORTED': 'Private Key is not imported.',
      'NULL RETURN': 'null return from iguana_bitcoinRPC',
      'ADDED_TO': 'added to',
      'SUCCESSFULLY': 'Successfully',
      'FAILED_TO_ADDCOIN': 'Failed to add iguana coin',
      'FAILED_SHEPHERD_HERD': 'Failed to get execute shepherd herd',
      'COIN_SELECTION': 'Coin Selection',
      'SELECTION_NOT_FOUND': 'Local coin list is not found',
      'LOCAL_UTXO_UPDATED': 'Local UTXO data is updated. Ready to send new transaction.',
      'PROCESSING_UTXO': 'Processing UTXO',
      'AWAITING_TX_RESP': 'Awaiting transaction data response'
    },
    'COIN_WALLETS': {
      'TX_FAILED': 'Transaction Failed',
      'TX_SUCCESS': 'Transaction Successful',
      'TX': 'Transaction'
    },
    'IAPI': {
      'PUBLIC_SM': 'public',
      'CON_STATUS': 'Connection status'
    },
    'KMD_NATIVE': {
      'SELECT_ADDRESS': 'Select Transparent or Private Address',
      'SELECT_ADDRESS_ALT': 'Select Transparent or Private KMD Address',
      'PRIVATE': 'private',
      'NEW_ADDR_GENERATED': 'New address generated successfully',
      'QUEUED': 'Queued',
      'PLEASE_REFRESH': 'Please press refresh button in a minute or so to see updated status',
      'EXECUTING': 'Executing',
      'FAILED': 'Failed',
      'SUCCESS': 'Success',
      'MESSAGE': 'Message',
      'EXECUTION_SECONDS': 'Execution Seconds',
      'WAIT_UNTIL_SYNCED': 'Transaction history is unavailable during synchronization progresss'
    },
    'LOGIN': {
      'PWD_REQ': 'Password is required.',
      'WALLET_SEED_REQ': 'Wallet seed is required.',
      'SAVED_WALLET_SEED': 'Have you saved your wallet seed?',
      'SEED_MAKE_SURE_BACKUP': 'Make sure you have it backed up. Without this seed you won\'t be able to access your wallet in the future!',
      'YES_I_BACKUP': 'Yes, I have taken backup.',
      'WALLET_LOCKED_LOGIN': 'Wallet Locked. Please login.',
      'CANCEL': 'Cancel',
      'UNLOCK': 'Unlock',
      'SIGN_IN': 'Sign In',
      'WELCOME': 'Welcome',
      'DISPLAY_SYNC_ONLY': 'Display sync only coins progress',
      'ENTER_VALUE_AGAIN': 'Please enter the same value again',
      'CUSTOM_WALLET_SEED': 'Custom wallet seed',
      'MUST_ENTER_SEED': 'You must enter a seed',
      'INVALID_SEED': 'Invalid Seed',
      'SEED_NOT_OF_TYPE': 'The inserted seed is not of type',
      'IGUANA_SEED': 'Iguana (256 bits)',
      'WAVES_SEED': 'Waves',
      'NXT_SEED': 'NXT',
      'SEED_COPIED': 'Seed copied',
      'SEED_SUCCESSFULLY_COPIED': 'The seed was successfully copied'
    },
    'SIDEBAR': {
      'EDEX_MOTTO': 'Most Secure, Easy and Native Decentralised Exchange',
      'JUMBLR_MOTTO': 'Secure, Native and Decentralised Coin Anonymizer'
    },
    'SETTINGS': {
      'PASSPHRASE_REQ': 'Passphrase is required.',
      'SAVE_APP_CONFIG': 'Save app config',
      'CONFIG_RESTART_REQUIRED': 'Most changes to app config require wallet restart!',
      'APP_CONFIG': 'App Config',
      'APP_INFO': 'App Info',
      'APP_RELEASE': 'App Release',
      'NAME': 'Name',
      'VERSION': 'Version',
      'SYS_INFO': 'System Info',
      'ARCH': 'Architecture',
      'OS_TYPE': 'OS Type',
      'OS_PLATFORM': 'OS Platfrom',
      'OS_RELEASE': 'OS Release',
      'CPU': 'CPU',
      'CPU_CORES': 'CPU Cores',
      'MEM': 'Memory',
      'LOCATIONS': 'Locations',
      'CACHE': 'Cache',
      'CONFIG': 'Config',
      'BIN': 'Bin',
      'DIR': 'Dir',
      'ADD_PEER_IP': 'Add Peer IP',
      'APP_SESSION': 'App Session',
      'EXPORT_KEYS_NOTE': 'Note: it\'s important that you provide the same passphrase you used to login to the wallet!<br>' +
                          'In case passphrases will not match wallet is going to log you out of current session.'
    },
    'TX_INFO': {
      'ADDRESS': 'address',
      'AMOUNT': 'amount',
      'CATEGORY': 'category',
      'CONFIRMATIONS': 'confirmations'
    },
    'SEND': {
      'PRESS_UPDATE_BTN': 'N/A. Press update button.',
      'TOTAL_UTXO_AVAILABLE': 'Total UTXO available',
      'LAST_UPDATED': 'Last updated',
      'NEXT_UPDATE_IN': 'Next update available in',
      'AGO': 'ago',
      'PROCESSING_REQ': 'Processing requests',
      'LOCKED_PLEASE_WAIT': 'Locked, please wait',
      'UPDATE': 'Update',
      'SELECT_T_OR_Z_ADDR': 'Select Transparent or Private Address',
      'ENTER_T_OR_Z_ADDR': 'Enter Transparent or Private address',
      'AWAITING': 'Awaiting in queue',
      'PROCESSING': 'Processing',
      'ERROR_CODE': 'Error Code',
      'WAITING': 'Waiting',
      'PROCESSING_TRANSACTION': 'Processing transaction',
      'NOTE_IT_WILL_TAKE': 'Note: it may take a few minutes to complete the transaction',
      'SEND_VIA': 'Alternative send method',
      'ENTER_AN_ADDRESS': 'Enter an address',
      'YOU_PICKED_OPT': 'You picked option',
      'PLEASE_WAIT': 'Please wait'
    }
  }
};