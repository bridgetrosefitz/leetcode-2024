import { feListings as raw1 } from "./byte-dance-250224.js";
import { rawDate250224Second as raw2 } from "./raw-2-250224.js";

const jobPostings1 = raw1.data.job_post_list.map(post => ({
  title: post.title,
  city: post.city_info.en_name,
  id: post.id,
  link: `https://jobs.bytedance.com/en/position/${post.id}/detail`,
}));

console.log({ jobPostings1 });
console.log("count jobPostings1", jobPostings1.length);

///////////////////

const jobPostings2 = raw2.data.job_post_list.map(post => ({
  title: post.title,
  city: post.city_info.en_name,
  id: post.id,
  link: `https://jobs.bytedance.com/en/position/${post.id}/detail`,
}));

console.log({ jobPostings2 });
console.log("count", jobPostings2.length);
