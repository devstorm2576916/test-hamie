

const scriptsInEvents = {

	async EventMenu_Event3_Act4(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			try {
				Telegram.WebApp.ready();
				window.Telegram.WebApp.expand();
		
				// Get the Telegram UserInfo
				const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
				const username = window.Telegram.WebApp.initDataUnsafe.user.username || ""; // Fallback if username is not available
				const firstName = window.Telegram.WebApp.initDataUnsafe.user.first_name || ""; // Fallback if first name is not available
				const lastName = window.Telegram.WebApp.initDataUnsafe.user.last_name || ""; // Fallback if last name is not available
		
				// Init the global variables
				runtime.globalVars.telegramId = telegramId;
				runtime.globalVars.userName = username.substr(0,10);
				runtime.globalVars.firstName = firstName;
				runtime.globalVars.lastName = lastName;
			} catch (e) {
		
			}
		}
		
		const urlParams = new URLSearchParams(window.location.search);
		const layout = urlParams.get('layout') || "menu";
		runtime.globalVars.layout = layout;
		
		runtime.callFunction("InitUser");
	},

	async EventGameplay_Event4_Act2(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			try {
				Telegram.WebApp.ready();
				window.Telegram.WebApp.expand();
				window.Telegram.WebApp.enableClosingConfirmation();
				// Get the Telegram UserInfo
				const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		
				// Get the DeviceID and DeviceType, GameVersion
				let deviceId = localStorage.getItem('deviceId');
				if (!deviceId) {
					deviceId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
					localStorage.setItem('deviceId', deviceId);
				}
				
				const ua = navigator.userAgent.toLowerCase();
				let deviceType = 'desktop';
				if (/mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua)) {
					deviceType = 'mobile';
				} else if (/tablet|ipad|playbook|silk/i.test(ua)) {
					deviceType = 'tablet';
				}
				
				const clientVersion = '2.1.0'; 
		
				// Init the global variables
				runtime.globalVars.gDeviceId = deviceId;
				runtime.globalVars.gDeviceId = deviceType;
				runtime.globalVars.gClientVersion = clientVersion;
				runtime.globalVars.telegramId = telegramId;
		
				runtime.callFunction("getSessionToken");
				
			} catch (e) {
			}
		}
	},

	async EventGameplay_Event34_Act1(runtime, localVars)
	{
		if(runtime.globalVars.gIsSessionActive){
			runtime.callFunction("updateData");
		} else {
			runtime.callFunction("getSessionToken");
		}
	},

	async EventGameplay_Event58_Act1(runtime, localVars)
	{
		runtime.globalVars.Selectedcolor = Math.round(Math.random() * 4)
	},

	async EventGameplay_Event66_Act1(runtime, localVars)
	{
		runtime.globalVars.Selectedcolor = Math.round(Math.random() * 2)
	},

	async EventScore_Event2_Act1(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			try {
				Telegram.WebApp.ready();
				window.Telegram.WebApp.expand();
				
				window.Telegram.WebApp.enableClosingConfirmation();
				// Get the Telegram UserInfo
				const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		
				// Init the global variables
				runtime.globalVars.telegramId = telegramId;
			} catch (e) {
			}
		}
	},

	async Event_leaderboard_Event3_Act1(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			try {
				Telegram.WebApp.ready();
				window.Telegram.WebApp.expand();
				window.Telegram.WebApp.enableClosingConfirmation();
				// Get the Telegram UserInfo
				const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		
				// Init the global variables
				runtime.globalVars.telegramId = telegramId;
			} catch (e) {
			}
		}
		
	},

	async Event_leaderboard_Event17_Act1(runtime, localVars)
	{
		runtime.callFunction("InitScreen");
	},

	async EventInventory_Event1_Act1(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			try {
				Telegram.WebApp.ready();
				window.Telegram.WebApp.expand();
				window.Telegram.WebApp.enableClosingConfirmation();
				// Get the Telegram UserInfo
				const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		
				// Init the global variables
				runtime.globalVars.telegramId = telegramId;
			} catch (e) {
			}
		}
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
