const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.Anchor,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.AddRemoveAnimation,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SubVar,
		C3.ScriptsInEvents.FolhaJogo_Event10_Act3,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{monstrinho: 0},
	{Sólido: 0},
	{chão: 0},
	{espinhoDeGelo: 0},
	{Teclado: 0},
	{Âncora: 0},
	{vida: 0},
	{Senóide: 0},
	{fantasma: 0},
	{Texto: 0},
	{Sprite3: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Mouse: 0},
	{Áudio: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{Sprite7: 0},
	{Texto4: 0},
	{Sprite8: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{Texto5: 0},
	{Texto6: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{Texto7: 0},
	{vidas: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	monstrinho: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	espinhoDeGelo: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	vida: class extends self.ISpriteInstance {},
	fantasma: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Áudio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Texto4: class extends self.ITextInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	Texto5: class extends self.ITextInstance {},
	Texto6: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	Texto7: class extends self.ITextInstance {}
}