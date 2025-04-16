

const scriptsInEvents = {

	async FolhaJogo_Event10_Act3(runtime, localVars)
	{
		if(vidas <=0 ){ console.log("Game Over");
		runtime.goToLayout("tela game over");
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
