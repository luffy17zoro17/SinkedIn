// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";

const allowedOrigins = [
  `https://quotetheanime.com/wp-content/uploads/2019/11/Zoro-Quotes.-One-Piece-Quotes.-I-dont-care-waht-society-says.-Ive-never-regretted-doing-anything.-I-do-what-I-want.-Quote-anime-1024x1024.jpg`
   
]

export async function handler(req, res) {

  await NextCors(req,res, {
     
    method:'GET',
    origin:[allowedOrigins,'*'],
    optionSuccessStatus:200,
  });

  res.json({message:'Hello NextJs Cors!'});
}




// const corsOptions = {
//   origin: (origin, callback) => {
//       if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//           callback(null, true)
//       } else {
//           callback(new Error('Not allowed by CORS'))
//       }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200
// }

module.exports = corsOptions 