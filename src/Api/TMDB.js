import axios from 'axios'
const apiKey= 'd40e01a4ff994c515b03441dc33b1c21'


 export  const getMovies= () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        axios.get(url).then(data=>{return data})

    };

 export const film =[
        {
            popularity: 1413.62,
            vote_count: 346,
            video: false,
            poster_path: "/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            id: 528085,
            adult: false,
            backdrop_path: "/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
            original_language: "en",
            original_title: "2067",
            genre_ids: [
                878,
                53,
                18
            ],
            title: "2067",
            vote_average: 4.7,
            overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            release_date: "2020-10-01"
        },
        {
            popularity: 1246.497,
            vote_count: 156,
            video: false,
            poster_path: "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
            id: 724989,
            adult: false,
            backdrop_path: "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
            original_language: "en",
            original_title: "Hard Kill",
            genre_ids: [
                28,
                53
            ],
            title: "Hard Kill",
            vote_average: 5,
            overview: "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
            release_date: "2020-10-23"
        },
        {
            popularity: 1273.047,
            vote_count: 1465,
            video: false,
            poster_path: "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
            id: 400160,
            adult: false,
            backdrop_path: "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
            original_language: "en",
            original_title: "The SpongeBob Movie: Sponge on the Run",
            genre_ids: [
                14,
                16,
                12,
                35,
                10751
            ],
            title: "The SpongeBob Movie: Sponge on the Run",
            vote_average: 8.1,
            overview: "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",
            release_date: "2020-08-14"
        },
        {
            popularity: 1060.741,
            vote_count: 218,
            video: false,
            poster_path: "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
            id: 671039,
            adult: false,
            backdrop_path: "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
            original_language: "fr",
            original_title: "Bronx",
            genre_ids: [
                53,
                28,
                18,
                80
            ],
            title: "Rogue City",
            vote_average: 5.9,
            overview: "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
            release_date: "2020-10-30"
        },

        {
            popularity: 1079.81,
            vote_count: 554,
            video: false,
            poster_path: "/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg",
            id: 524047,
            adult: false,
            backdrop_path: "/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg",
            original_language: "en",
            original_title: "Greenland",
            genre_ids: [
                28,
                53
            ],
            title: "Greenland",
            vote_average: 7.1,
            overview: "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
            release_date: "2020-07-29"
        },
        {
            popularity: 1095.491,
            vote_count: 738,
            video: false,
            poster_path: "/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg",
            id: 531219,
            adult: false,
            backdrop_path: "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
            original_language: "en",
            original_title: "Roald Dahl's The Witches",
            genre_ids: [
                14,
                10751,
                12,
                35,
                27
            ],
            title: "Roald Dahl's The Witches",
            vote_average: 6.9,
            overview: "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
            release_date: "2020-10-26"
        },

        {
            popularity: 768.528,
            vote_count: 161,
            video: false,
            poster_path: "/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            id: 741067,
            adult: false,
            backdrop_path: "/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg",
            original_language: "en",
            original_title: "Welcome to Sudden Death",
            genre_ids: [
                28,
                53,
                12,
                18
            ],
            title: "Welcome to Sudden Death",
            vote_average: 6.4,
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            release_date: "2020-09-29"
        },
        {
            popularity: 725.668,
            vote_count: 49,
            video: false,
            poster_path: "/e98dJUitAoKLwmzjQ0Yxp1VQrnU.jpg",
            id: 571384,
            adult: false,
            backdrop_path:"/gkvOmVXdukAwpG8LjTaHo2l2cWU.jpg",
            original_language: "en",
            original_title: "Come Play",
            genre_ids: [
                27
            ],
            title: "Come Play",
            vote_average: 6.6,
            overview: "A lonely young boy feels different from everyone else. Desperate for a friend, he seeks solace and refuge in his ever-present cell phone and tablet. When a mysterious creature uses the boy’s devices against him to break into our world, his parents must fight to save their son from the monster beyond the screen.",
            release_date: "2020-10-28"
        },
    ];
export default function getImage (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}







