export interface LanyardApiResponse {
  data: {
    kv: Record<string, string>;
    spotify: {
      track_id: string;
      timestamps: {
        start: number;
        end: number;
      };
      album: string;
      album_art_url: string;
      artist: string;
      song: string;
    };
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
      bot: boolean;
      clan: null;
      global_name: string;
      avatar_decoration_data: null;
      display_name: string;
      public_flags: number;
    };
    activities: Array<object>;
    discord_status: 'online' | 'dnd' | 'idle' | 'offline';
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    success: boolean;
  };
}

export interface LanyardData {
  kv: Record<string, string>;
  spotify: {
    track_id: string;
    timestamps: {
      start: number;
      end: number;
    };
    album: string;
    album_art_url: string;
    artist: string;
    song: string;
  };
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    bot: boolean;
    clan: null;
    global_name: string;
    avatar_decoration_data: null;
    display_name: string;
    public_flags: number;
  };
  activities: [
    {
      flags: number;
      id: string;
      name: string;
      type: number;
      state: string;
      session_id: string;
      details: string;
      timestamps: {
        start: number;
        end: number;
      };
      assets: {
        large_image: string;
        large_text: string;
      };
      sync_id: string;
      created_at: number;
      party: {
        id: string;
      };
    },
  ];
  discord_status: 'online' | 'dnd' | 'idle' | 'offline';
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
  success: boolean;
}
