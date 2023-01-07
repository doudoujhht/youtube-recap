export const ssr = false;
import { youtubeApiKey } from '../../keys';
import data from '../../../static/data/watch-history.json';
import axios from 'axios';
let usableData: DataType = data as DataType;
type DataType = Array<{
	header: string;
	title: string;
	titleUrl: string;
	subtitles: Array<{
		name: string;
		url: string;
	}>;
	time: string;
	products: string[];
	activityControls: string[];
	details?: Array<{
		name: string;
	}>;
}>;
formatData();

// const data = 2;
export function load() {
	return returnableData();
}

//here i create a new array compose of just one property of the data like
//title url is the url video after that i cast it to a set to remove all the duplicate
//and finally i take the size of the set to know the numbers of different video that i watched
const numberOfVideo = () => new Set(usableData.map((obj) => obj.titleUrl)).size;
const numberOfCreators = () => new Set(usableData.map((obj) => obj.subtitles[0].url)).size;

async function mostViewed() {
	const counts = findCounts();
	const maximum = findMaximum(counts);
    const tenBest = findTenBest(counts);
    const channelsName = tenBest.map((item) => item[0].split('|')[1].replace("Watched ",""));
    const channelsId = tenBest.map((item) => item[0].split('|')[0]);
	const response1 = await findInfo(channelsId[0]);
	const response2 = await findInfo(channelsId[1]);
    const response3 = await findInfo(channelsId[2]);
    const best: { 
		name:string
		times: number 
	}[] = [];
    channelsName.forEach((channel, i) => {
        const n = tenBest[i][1]
        best.push({name:channel, times:n})
    });
	return {
		first: {
			thumbnail: response1.thumbnail,
            title: response1.title,
            numberOfviews:tenBest[0][1]
		},
		second: {
			thumbnail: response2.thumbnail,
			title: response2.title
		},
		third: {
			thumbnail: response3.thumbnail,
			title: response3.title
		},
		numberOfviews: maximum[1],
		tenBest: best
	};
}
function returnableData() {
	return {
		numberOfVideoWatched: numberOfVideo(),
		numberOfCreators: numberOfCreators(),
		mostViewed: mostViewed()
	};
}

function formatData() {
	usableData = usableData.filter((obj) => obj.subtitles?.length == 1 && !obj.details);
	usableData = usableData.filter((obj) => obj.time.startsWith('2022'));
}

async function findInfo(channelId: string) {
	try {
		const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
			params: {
				id: channelId,
				part: 'snippet',
				key: youtubeApiKey
			}
		});
        let usableResponse = response.data;
        usableResponse = usableResponse.items[0];
		const ret = {
			thumbnail: usableResponse.snippet.thumbnails.medium.url,
			title: usableResponse.snippet.title
		};
		return ret;
    } catch (e) {
        const message:string=e.message
		return {
			thumbnail: channelId,
			title: message
		};;
	}
}

function findCounts() {
	const counts: { [key: string]: number } = {};
	usableData.forEach((item) => {
		const channelId = item.subtitles[0].url.split('/').pop();
		const channelName = item.subtitles[0].name;
		const id = `${channelId}|${channelName}`;
		if (channelId && !counts[id]) {
			counts[id] = 0;
		}
		if (channelId) {
			counts[id]++;
		}
	});
	return counts;
}

function findMaximum(counts: { [key: string]: number }) {
	//  I am using the Object.entries() function to get an array of key-value pairs in the obj object. I am then using the Array.prototype.reduce() function to find the maximum value in the array, and the key associated with that value. The Array.prototype.reduce() function takes a callback function as an argument, which is called for each element in the array. The callback function compares the current value with the maximum value found so far, and returns the key-value pair with the larger value.
	return Object.entries(counts).reduce(
		(max, [key, value]) => (value > max[1] ? [key, value] : max),
		['', -Infinity]
	);
}
function findTenBest(counts: { [key: string]: number }) {
	const entries = Object.entries(counts);
	entries.sort((a, b) => b[1] - a[1]);
	const top10 = entries.slice(0, 10);
	return top10;
}

// function numberOfVideo() {
//     return new Set(usableData.map(obj => obj.titleUrl)).size
// }// function numberOfCreators() {
//     return new Set(usableData.map((obj)=>obj.subtitles[0].url)).size
// }
