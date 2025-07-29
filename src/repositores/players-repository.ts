import { StaticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentinian",
        "position": "Forward",
        "statics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 96,
            "Defending": 38,
            "Physical": 65
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portuguese",
        "position": "Forward",
        "statics": {
            "Overall": 91,
            "Pace": 87,
            "Shooting": 93,
            "Passing": 82,
            "Dribbling": 85,
            "Defending": 35,
            "Physical": 78
        }
    },
    {
        "id": 3,
        "name": "Neymar Jr",
        "club": "Santos FC",
        "nationality": "Brazilian",
        "position": "Forward",
        "statics": {
            "Overall": 89,
            "Pace": 88,
            "Shooting": 84,
            "Passing": 86,
            "Dribbling": 92,
            "Defending": 35,
            "Physical": 62
        }
    },
    {
        "id": 4,
        "name": "Kylian Mbappé",
        "club": "Real Madrid",
        "nationality": "French",
        "position": "Forward",
        "statics": {
            "Overall": 92,
            "Pace": 97,
            "Shooting": 89,
            "Passing": 80,
            "Dribbling": 91,
            "Defending": 36,
            "Physical": 75
        }
    },
    {
        "id": 5,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgian",
        "position": "Midfielder",
        "statics": {
            "Overall": 91,
            "Pace": 76,
            "Shooting": 86,
            "Passing": 94,
            "Dribbling": 87,
            "Defending": 64,
            "Physical": 78
        }
    },
    {
        "id": 6,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "Norwegian",
        "position": "Forward",
        "statics": {
            "Overall": 90,
            "Pace": 91,
            "Shooting": 94,
            "Passing": 70,
            "Dribbling": 78,
            "Defending": 45,
            "Physical": 88
        }
    },
    {
        "id": 7,
        "name": "Luka Modrić",
        "club": "Retrired",
        "nationality": "Croatian",
        "position": "Midfielder",
        "statics": {
            "Overall": 88,
            "Pace": 70,
            "Shooting": 78,
            "Passing": 89,
            "Dribbling": 87,
            "Defending": 72,
            "Physical": 65
        }
    },
    {
        "id": 8,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": "Dutch",
        "position": "Defender",
        "statics": {
            "Overall": 89,
            "Pace": 78,
            "Shooting": 60,
            "Passing": 72,
            "Dribbling": 68,
            "Defending": 91,
            "Physical": 86
        }
    },
    {
        "id": 9,
        "name": "Robert Lewandowski",
        "club": "Barcelona",
        "nationality": "Polish",
        "position": "Forward",
        "statics": {
            "Overall": 90,
            "Pace": 78,
            "Shooting": 93,
            "Passing": 79,
            "Dribbling": 83,
            "Defending": 42,
            "Physical": 82
        }
    },
    {
        "id": 10,
        "name": "Karim Benzema",
        "club": "Al-Ittihad",
        "nationality": "French",
        "position": "Forward",
        "statics": {
            "Overall": 89,
            "Pace": 77,
            "Shooting": 88,
            "Passing": 82,
            "Dribbling": 85,
            "Defending": 40,
            "Physical": 76
        }
    },
    {
        "id": 11,
        "name": "Casemiro",
        "club": "Manchester United",
        "nationality": "Brazilian",
        "position": "Midfielder",
        "statics": {
            "Overall": 88,
            "Pace": 65,
            "Shooting": 74,
            "Passing": 76,
            "Dribbling": 72,
            "Defending": 89,
            "Physical": 85
        }
    },
    {
        "id": 12,
        "name": "Harry Kane",
        "club": "Bayern Munich",
        "nationality": "English",
        "position": "Forward",
        "statics": {
            "Overall": 90,
            "Pace": 73,
            "Shooting": 93,
            "Passing": 83,
            "Dribbling": 82,
            "Defending": 48,
            "Physical": 80
        }
    },
    {
        "id": 13,
        "name": "Sadio Mané",
        "club": "Al Nassr",
        "nationality": "Senegalese",
        "position": "Forward",
        "statics": {
            "Overall": 86,
            "Pace": 91,
            "Shooting": 80,
            "Passing": 77,
            "Dribbling": 85,
            "Defending": 48,
            "Physical": 74
        }
    },
    {
        "id": 14,
        "name": "Jude Bellingham",
        "club": "Real Madrid",
        "nationality": "English",
        "position": "Midfielder",
        "statics": {
            "Overall": 86,
            "Pace": 78,
            "Shooting": 79,
            "Passing": 83,
            "Dribbling": 84,
            "Defending": 74,
            "Physical": 81
        }
    },
    {
        "id": 15,
        "name": "Pedri",
        "club": "Barcelona",
        "nationality": "Spanish",
        "position": "Midfielder",
        "statics": {
            "Overall": 85,
            "Pace": 79,
            "Shooting": 70,
            "Passing": 84,
            "Dribbling": 88,
            "Defending": 62,
            "Physical": 65
        }
    },
    {
        "id": 16,
        "name": "Vinícius Júnior",
        "club": "Real Madrid",
        "nationality": "Brazilian",
        "position": "Forward",
        "statics": {
            "Overall": 89,
            "Pace": 95,
            "Shooting": 82,
            "Passing": 79,
            "Dribbling": 90,
            "Defending": 38,
            "Physical": 70
        }
    },
    {
        "id": 17,
        "name": "Joshua Kimmich",
        "club": "Bayern Munich",
        "nationality": "German",
        "position": "Midfielder",
        "statics": {
            "Overall": 88,
            "Pace": 70,
            "Shooting": 72,
            "Passing": 89,
            "Dribbling": 84,
            "Defending": 83,
            "Physical": 77
        }
    },
    {
        "id": 18,
        "name": "Thibaut Courtois",
        "club": "Real Madrid",
        "nationality": "Belgian",
        "position": "Goalkeeper",
        "statics": {
            "Overall": 91,
            "Pace": 50,
            "Shooting": 40,
            "Passing": 60,
            "Dribbling": 42,
            "Defending": 25,
            "Physical": 80
        }
    },
    { 
        "id": 19,
        "name": "David Beckham",
        "club": "Retired",
        "nationality": "English",
        "position": "Midfielder",
        "statics": {
            "Overall": 85,
            "Pace": 76,
            "Shooting": 82,
            "Passing": 90,
            "Dribbling": 78,
            "Defending": 50,
            "Physical": 70,
        }
    }

];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnPlayer = async (id: number) => {
    const index = database.findIndex((player) => player.id === id);
    
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }

    return false;
};

export const findAndModifyPlayer = async (id: number, statics: StaticsModel) => {
    const playerIndex = database.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statics = statics;
        return database[playerIndex];
    }
};