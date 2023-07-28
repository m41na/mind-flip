import axios, { serverUrl } from './request';

export const remoteFetchGamesListing = async () => {
    return await axios.get(`${serverUrl()}/trivia/listing`)
        .then(resp => resp.data);
}

export const remoteFetchGamesByOrganizer = async (organizer) => {
    return await axios.get(`${serverUrl()}/trivia/${organizer}/listing`)
        .then(resp => resp.data);
}

export const remoteFetchGameTickers = async () => {
    return await axios.get(`${serverUrl()}/trivia/ticker`)
        .then(resp => resp.data);
}

export const remoteFetchGameInfo = async (title, organizer) => {
    return await axios.get(`${serverUrl()}/trivia/title/${title}/organizer/${organizer}`)
        .then(resp => resp.data);
}

export const remoteFetchGameInfoById = async (game_id) => {
    return await axios.get(`${serverUrl()}/trivia/info/${game_id}`)
        .then(resp => resp.data);
}

export const remoteFetchProgression = async (ticker) => {
    return await axios.get(`${serverUrl()}/trivia/ticker/${ticker}`)
        .then(resp => resp.data);
}

export const remoteFetchGameLayout = async (game) => {
    return await axios.get(`${serverUrl()}/trivia/layout/${game}`)
        .then(resp => resp.data);
}

export const remoteFetchGameQuestion = async (question) => {
    return await axios.get(`${serverUrl()}/trivia/question/${question}`)
        .then(resp => resp.data);
}

export const remoteFetchQuestionChoices = async (question) => {
    return await axios.get(`${serverUrl()}/trivia/question/${question}/choices`)
        .then(resp => resp.data);
}

export const remoteFetchGameEngine = async (game) => {
    return await axios.get(`${serverUrl()}/trivia/engine/${game}`)
        .then(resp => resp.data);
}

export const remoteFetchGameParticipant = async (participant) => {
    return await axios.get(`${serverUrl()}/trivia/participant/${participant}/details`)
        .then(resp => resp.data);
}

export const remoteFetchPlayerByEmail = async (email) => {
    return await axios.get(`${serverUrl()}/trivia/player/${email}`)
        .then(resp => resp.data);
}

export const remoteCreateGameHandle = async ({ title, organizer }) => {
    return await axios.post(`${serverUrl()}/trivia/game`, { title, organizer }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resp => resp.data);
}

export const remoteUpdateGameStatus = async (game_id, game_status) => {
    return await axios.put(`${serverUrl()}/trivia/game/${game_id}`, { game_status }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resp => resp.data);
}

export const remoteDeleteGameHandle = async (game_id) => {
    return await axios.delete(`${serverUrl()}/trivia/game/${game_id}`)
        .then(resp => resp.data);
}

export const remoteCreateGameEngine = async (game, {
    scheduled_start, progression, is_multi_player, can_navigate_back, server_push_mode, game_ticker }) => {
    return await axios.post(`${serverUrl()}/trivia/engine/${game}`,
        { scheduled_start, progression, is_multi_player, can_navigate_back, server_push_mode, game_ticker },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.data);
}

export const remoteUpdateGameEngine = async (game, { current_section, section_index }) => {
    return await axios.put(`${serverUrl()}/trivia/engine/${game}`, { current_section, section_index },
        {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => resp.data);
}

export const remoteFetchGameParticipants = async (game) => {
    return await axios.get(`${serverUrl()}/trivia/participant/${game}`)
        .then(resp => resp.data);
}

export const remoteAddGameParticipant = async (game, player) => {
    return await axios.put(`${serverUrl()}/trivia/participant/${game}/player/${player}`)
        .then(resp => resp.data);
}

export const remoteDropGameParticipant = async (participant) => {
    return await axios.delete(`${serverUrl()}/trivia/participant/${participant}`)
        .then(resp => resp.data);
}

export const remoteFetchParticipantTally = async (participant) => {
    return await axios.get(`${serverUrl()}/trivia/participant/${participant}/score`)
        .then(resp => resp.data);
}

export const remoteUpdateHighestScore = async (participant, score) => {
    return await axios.put(`${serverUrl()}/trivia/participant/${participant}/highscore/${score}`)
        .then(resp => resp.data);
}

export const remoteUpdateParticipantAnswer = async (game_id, participant_id, question_id,
    { answer_submitted, display_duration, max_points, score_strategy, expected_answer, time_remaining, points_remaining,
    }) => {
    return await axios.post(`${serverUrl()}/trivia/game/${game_id}/participant/${participant_id}/question/${question_id}/answer`,
        { answer_submitted, display_duration, max_points, score_strategy, expected_answer, time_remaining, points_remaining, },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.data);
}

export const remoteFetchGameTallies = async (game) => {
    return await axios.put(`${serverUrl()}/trivia/game/${game}/score`)
        .then(resp => resp.data);
}

export const remoteSearchQuestionsByCriteria = async (start_from = 1, fetch_size = 10, {
    author_username, author_screen_name, category, created_before, created_after, }) => {
    let criteria = { start_from, fetch_size, author_username, author_screen_name, category, created_before, created_after, };

    return await axios.get(`${serverUrl()}/trivia/question/search`, {
        criteria,
        paramsSerializer: params => {
            return Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
        }
    }).then(resp => resp.data);
}

export const remoteUpsertGameTicker = async ({ ticker_id, ticker_title, pre_countdown_delay, countdown_duration,
    post_countdown_delay }) => {
    return await axios.post(`${serverUrl()}/trivia/ticker`,
        { ticker_id, ticker_title, pre_countdown_delay, countdown_duration, post_countdown_delay, },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.data);
}

export const remoteDeleteGameTicker = async (ticker_id) => {
    return await axios.delete(`${serverUrl()}/trivia/ticker/${ticker_id}`)
        .then(resp => resp.data);
}

export const remoteFetchAllGamePlacards = async () => {
    return await axios.get(`${serverUrl()}/trivia/placard`)
        .then(resp => resp.data);
}

export const remoteUpsertGamePlacard = async ({ placard_content, display_duration, followed_by, content_type }) => {
    return await axios.post(`${serverUrl()}/trivia/placard`, { placard_content, display_duration, followed_by, content_type, },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.data);
}

export const remoteDeleteGamePlacard = async (placard_id) => {
    return await axios.delete(`${serverUrl()}/trivia/placard/${placard_id}`).then(resp => resp.data);
}

export const remoteFetchQuestionsByAuthor = async (author_id) => {
    console.log("remoteFetchQuestionsByAuthor", author_id);
    return await axios.get(`${serverUrl()}/trivia/question/author/${author_id}`).then(resp => resp.data);
}

export const remoteUpsertGameQuestion = async ({ placard_content, display_duration, followed_by, content_type }) => {
    return await axios.post(`${serverUrl()}/trivia/question`,
        { placard_content, display_duration, followed_by, content_type, },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.data);
}