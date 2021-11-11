const express = require('express');
const movie = require('../models/movies');
const account = require('../models/accounts');
const multer = require('multer');
const router = express.Router();
const fs = require('fs')
const path = require('path')
require('dotenv').config()
require('./cloudinary')
const cloudinary = require('cloudinary')

//IMAGE STORAGE
const storage = multer.diskStorage({
filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }

});

//VIDEO STORAGE
const videoStorage = multer.diskStorage({
destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});


//IMAGE FILTER
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);  
    }
}

//VIDEO FILTER
const videoFilter = (req, file, cb) => {
    if (file.mimetype === 'video/mp4') {
        cb(null, true);
    } else {
        cb(null, false);     
    }
}

//IMAGE UPLOAD 
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 20 },
    fileFilter: fileFilter,
})

//VIDEO UPLOAD 
const videos = multer({
    storage: videoStorage,
    limits: { fileSize: 1024 * 1024 * 20 },
    fileFilter: videoFilter,
})




//PHOTO ROUTER WITH MELTER
router.post('/photos', upload.single('file'), async (req, res, next) => {
    cloudinary.v2.uploader.upload(req.file.path, { tags: 'basic_sample' }, function (err, image) {
        if (err) { console.warn(err); }
        res.status(200).json({ path: `${image.url}` });
      });
})


//VIDEO ROUTER WITH MELTER
router.post('/videos', videos.single('file'), (req, res, next) => {
    const file = req.file
    const filePath = { path: `${file.filename}` }
   
    if (req.file === null) {
        res.status(500).json({erros:'Oops something went wrong on video upload'})
    }
    else {
        res.status(200).json(filePath);
    }
})


//VIDEO STREAM
router.get('/videostream/:id', (req, res, error) => {

    const filename = { file: req.params.id }
    const paths = `./uploads/${filename.file}`

    const streams = (path) => {
        const stat = fs.statSync(path)


        const fileSize = stat.size
        const range = req.headers.range

        if (range) {
            const parts = range.replace(/bytes=/, "").split("-")
            const start = parseInt(parts[0], 10)
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
            const chunkSize = (end - start) + 1
            const file = fs.createReadStream(path, { start, end })
            const head = {
                'Content-Range': `bytes ${start} - ${end} / ${fileSize}`,
                'Content-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'content-Type': 'video/mp4'
            }
            res.writeHead(206, head)
            file.pipe(res)

        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4'
            }
            res.writeHead(200, head)
            fs.createReadStream(path).pipe(res)
        }

    }

    fs.exists(paths, (file) => {
        if (file) {
            const path = `./uploads/${filename.file}`
            streams(path) 
        }
        else {
            const path = `./uploads/xtrail.mp4`
            streams(path)
          
        }
    })
})



//GET_MOVIES ROUTER
router.get('/movieget', (req, res) => {
    movie.find({}).then(get_movies => {
        res.status(200).json(get_movies)
    }).catch(error => {
        if (error) {
            res.status(500).json({erros:'Oops something went wrong on get_movies'}) 
        }
    })
})


//POST_MOVIES ROUTER
router.post('/moviepost', (req, res, next) => {
    const data = req.body;
    console.log('data',data)
    const newMovies = new movie(data);

    newMovies.save((error) => {
        if (error) {
            res.status(500).json({erros:'Oops something went wrong on post_movies'}) 
        }
        else {
            res.status(200).json('movie added')
        }
    });
})


//MOVIE_RATE
router.put('/movie_rate/:id', (req, res, next) => {
 
    if (req.body.mission === 'rating') {

        const rate_qery = async () => {

            const rate_movie_find = await movie.findOne({ _id: req.params.id }).catch(next, () => {
                res.status(500).json({ erros: 'Oops something went wrong' })
            })
        
       
            const check_rates = rate_movie_find.rate.filter(e => e._id === req.body.payload[0]._id)
        

            if (typeof check_rates[0] !== 'object') {
                //RATE_MOVIE 

            
                movie.findOneAndUpdate({ _id: req.params.id }, { rate:[...rate_movie_find.rate,...req.body.payload] }, { upsert: true }).then(() => {
                    movie.findOne({ _id: req.params.id }).then(movie => {
                        res.status(200).json(movie)
                    }).catch(next, () => {
                        res.status(500).json({ erros: 'Oops something went wrong' })

                    })
                }).catch(next, () => {
                    res.status(500).json({ erros: 'Oops something went wrong' })

                })

            } else {
                //UNRATE_MOVIE

                const unrate = rate_movie_find.rate.filter(e => e._id !== req.body.payload[0]._id)
        
         
                movie.findOneAndUpdate({ _id: req.params.id }, { rate:unrate }, { upsert: true }).then(() => {
                    movie.findOne({ _id: req.params.id }).then(movie => {
                        res.status(200).json(movie)
                    }).catch(next, () => {
                        res.status(500).json({ erros: 'Oops something went wrong' })

                    })
                }).catch(next, () => {
                    res.status(500).json({ erros: 'Oops something went wrong' })

                })
            }
        }
        rate_qery()
    } else if (req.body.mission === 'comment') {

        if (req.body.type === 'comment') {
            const mission_comment = async () => {
                const comment_movie = await movie.findOne({ _id: req.params.id }).catch(next, () => {
                    res.status(500).json({ erros: 'Oops something went wrong' })
                })
       
                movie.findOneAndUpdate({ _id: req.params.id }, { comments: [...comment_movie.comments, ...[req.body.payload]] }, { upsert: true }).then(() => {
                    movie.findOne({ _id: req.params.id }).then(movie => {
                        res.status(200).json(movie)
                    }).catch(next, () => {
                        res.status(500).json({ erros: 'Oops something went wrong  on comment' })
       
                    })
                }).catch(next, () => {
                    res.status(500).json({ erros: 'Oops something went wrong' })

                })
            }
            mission_comment()

        } else if (req.body.type === 'rate') {
              
            const pending_qery = async () => {

                const comment_movie_find = await movie.findOne({ _id: req.params.id }).catch(next, () => {
                    res.status(500).json({ erros: 'Oops something went wrong' })
                })
            
           
                const is_comment_find = comment_movie_find.comments.filter(e => e.id === req.body.selected)
                const check_rate = is_comment_find[0].rate.filter(e => e._id === req.body.payload[0]._id)
            
                if (typeof check_rate[0] !== 'object') {

                    const mission_rate = async () => {
                        const comment_movie = await movie.findOne({ _id: req.params.id }).catch(next, () => {
                            res.status(500).json({ erros: 'Oops something went wrong' })
                        })

                        const is_comment = comment_movie.comments.filter(e => e.id === req.body.selected)
                        const not_commet = comment_movie.comments.filter(e => e.id !== req.body.selected)
               
                        //UPDATE_SELECTED_COMMENT
                        const update_reply_comment = [...is_comment[0].rate, ...req.body.payload]
                        const combine_is_comment = {
                            _id: is_comment[0]._id,
                            id: is_comment[0].id,
                            user: is_comment[0].user,
                            date: is_comment[0].date,
                            time: is_comment[0].time,
                            comment: is_comment[0].comment,
                            rate: update_reply_comment,
                            replys: is_comment[0].replys,
                   
                        }
               
            
                
                        const combine_all_comments = [...not_commet, ...[combine_is_comment]]
            
                        movie.findOneAndUpdate({ _id: req.params.id }, { comments: combine_all_comments }, { upsert: true }).then(() => {
                            movie.findOne({ _id: req.params.id }).then(movie => {
                                res.status(200).json(movie)
                            }).catch(next, () => {
                                res.status(500).json({ erros: 'Oops something went wrong' })

                            })
                        }).catch(next, () => {
                            res.status(500).json({ erros: 'Oops something went wrong' })

                        })

                    }
                    mission_rate()
                
                } else {
                

                    const mission_rate_checking = async () => {
                        const comment_movie_checking = await movie.findOne({ _id: req.params.id }).catch(next, () => {
                            res.status(500).json({ erros: 'Oops something went wrong' })
                        })

                        const is_comment_checking = comment_movie_checking.comments.filter(e => e.id === req.body.selected)
                        const not_commet_checking = comment_movie_checking.comments.filter(e => e.id !== req.body.selected)
                        
                        //UPDATE_SELECTED_COMMENT
                        const update_reply_comment_checking = is_comment_checking[0].rate.filter(e => e._id !== req.body.payload[0]._id)
                        
                 
                        const combine_is_comment_checking = {
                            _id: is_comment_checking[0]._id,
                            id: is_comment_checking[0].id,
                            user: is_comment_checking[0].user,
                            date: is_comment_checking[0].date,
                            time: is_comment_checking[0].time,
                            comment: is_comment_checking[0].comment,
                            rate: update_reply_comment_checking,
                            replys: is_comment_checking[0].replys,
                   
                        }
               
            
                
                        const combine_all_comments_checking = [...not_commet_checking, ...[combine_is_comment_checking]]
            
                        movie.findOneAndUpdate({ _id: req.params.id }, { comments: combine_all_comments_checking }, { upsert: true }).then(() => {
                            movie.findOne({ _id: req.params.id }).then(movie => {
                                res.status(200).json(movie)
                            }).catch(next, () => {
                                res.status(500).json({ erros: 'Oops something went wrong' })

                            })
                        }).catch(next, () => {
                            res.status(500).json({ erros: 'Oops something went wrong' })

                        })

                    }

                    mission_rate_checking()
                }

            }
            pending_qery()

            } else if (req.body.type === 'reply') {
            
                const mission_reply = async () => {
                    const comment_movie_reply = await movie.findOne({ _id: req.params.id }).catch(next, () => {
                        res.status(500).json({ erros: 'Oops something went wrong' })
                    })


                    const is_comment_reply = comment_movie_reply.comments.filter(e => e.id === req.body.selected)
                    const not_commet_reply = comment_movie_reply.comments.filter(e => e.id !== req.body.selected)
               
                    //UPDATE_SELECTED_COMMENT
                    const update_reply_comment_reply = [...is_comment_reply[0].replys, ...req.body.payload]
                    const sorter= [...update_reply_comment_reply.sort((a, b) => b.date - a.date)]

                    const combine_is_comment_reply = {
                        _id: is_comment_reply[0]._id,
                        id: is_comment_reply[0].id,
                        user: is_comment_reply[0].user,
                        date: is_comment_reply[0].date,
                        time: is_comment_reply[0].time,
                        comment: is_comment_reply[0].comment,
                        rate:is_comment_reply[0].rate,
                        replys:sorter ,
               
                    }
           
        
            
                    const combine_all_comments_reply = [...not_commet_reply, ...[combine_is_comment_reply]]
        


                    movie.findOneAndUpdate({ _id: req.params.id }, { comments: combine_all_comments_reply }, { upsert: true }).then(() => {
                        movie.findOne({ _id: req.params.id }).then(movie => {
                            res.status(200).json(movie)
                        }).catch(next, () => {
                            res.status(500).json({ erros: 'Oops something went wrong' })

                        })
                    }).catch(next, () => {
                        res.status(500).json({ erros: 'Oops something went wrong' })

                    })

                  
        
            }
            mission_reply()
        }

        
   }
   
  

})


//ACCOUNT_LOGIN ROUTER
router.post('/accountget', (req, res) => {
    const payload=req.body
     account.findOne({user_email:payload.user_email,user_password:payload.user_password}).then(login => {
      
       
        const data_filter = {
                   _id:login._id,
                    image:login.image,
                    user_name:login.user_name,
                    user_lastname:login.user_lastname,
                    user_email:login.user_email,
                    date:login.date,
                    __v:login.__v
                }
               
        if (login.user_email === payload.user_email && login.user_password === payload.user_password) {
    
            const configer = {
                erros: 'account found',
                payload:data_filter
            }
        
        res.status(200).json(configer)
       }else{
        res.status(500).json({erros:'Oops account not found'}) 
       }
    }).catch(error => {
        if (error) {
            res.status(500).json({erros:'Oops something went wrong on Login'})
        }
    })

})

 
//ACCOUNT_REGISTER
router.post('/accountpost', (req, res, next) => {
    const data = req.body;
    const newAccount = new account(data);
    

    newAccount.save((error) => {
          if (error) {
            res.status(500).json({erros:'Oops something went wrong on saving account'})   
        }
          else {
            account.find({}).then(account => {
                const your_account=account.filter(e=>e.user_name===data.user_name&&e.user_email===data.user_email&&e.user_password===data.user_password)
               
                const data_filter = {
                    _id:your_account[0]._id,
                    image:your_account[0].image,
                    user_name:your_account[0].user_name,
                    user_lastname:your_account[0].user_lastname,
                    user_email:your_account[0].user_email,
                    date:your_account[0].date,
                    __v:your_account[0].__v
                    
                    
                }
              
               res.status(200).json(data_filter )
            }).catch(error => {
                if (error) {
                    res.status(500).json({erros:'Oops something went wrong on get_movies'}) 
                }
            })

            
          }
      });
})

router.post('/accountpostlogin', (req, res, next) => {
    account.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
       account.findOne({ _id: req.params.id }).then(myAccount => {
            res.json(myAccount)
          
        }).catch(next, () => {})

    })
})





module.exports = router;

