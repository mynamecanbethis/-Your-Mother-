 const game = document.getElementById('game')
 const scoreDisplay = document.getElementById('score')

 const jepordyCategories = [
  {
    genre: 'WHO',
    questions:[
      {
        questions: 'Who is Tom Riddle?',
         answers: ['Dumbledor' , 'Voldemort'],
         correct: 'Voldemort',
         level: 'easy'

      },

      {
        questions: 'Who is Sirius Black?',
         answers: ['A Azkaban innocent escaped prisoner.' , 'Cedric Diggorys brother.'],
         correct: 'A Azkaban innocent escaped prisoner.',
         level: 'medium'

      },

    {
        questions: 'Who teaches COMC?',
         answers: ['Hagrid.' , 'Snape.'],
         correct: 'Hagrid.',
         level: 'easy'

      },

      {
        questions: 'Who is the Slytherin Seeker?',
         answers: ['Draco.' , 'Harry.'],
         correct: 'Draco.',
         level: 'easy'

      },

      {
        questions: 'Who was upset that tests were canceled in Chamber Of Secrets?',
         answers: ['Fred.' , 'Hermoiny.'],
         correct: 'Hermoiny.',
         level: 'hard'

      },

      {
        questions: 'Who drinks unicorn blood in the first movie?',
         answers: ['Dumbledor.' , 'Voldemort.'],
         correct: 'Voldemort.',
         level: 'hard'

      }
    ]
  },
  {
    genre: 'WHERE',
    questions:[
      
      {
        questions: 'Where did Harry meet Tom Riddle?',
         answers: ['In the Chamber of Secrets.' , 'In the Gryfindor corridor.'],
         correct: 'In the Chamber of Secrets.',
         level: 'meduim'

      },
      
      {
        questions: 'Where did Hagrid get a dragon egg from?',
         answers: ['Dumbledor.' , 'Voldemort.'],
         correct: 'Voldemort.',
         level: 'hard'

      },
      
      {
        questions: 'Where did Moaning Mertle die?',
         answers: ['In the chamber of secrets.' , 'In the girls bathroom.'],
         correct: 'In the girls bathroom.',
         level: 'easy'

      },
      
      {
        questions: 'Where did harry put a sock for dobby?',
         answers: ['In the pages of a book.' , 'In his pocket'],
         correct: 'In the pages of a book.',
         level: 'hard'

      },
      
      {
        questions: 'Where is the train place.',
         answers: ['9 3/4' , '9'],
         correct: '9 3/4',
         level: 'hard'

      }
    ]
  },
  {
    genre: 'WHY',
    questions:[
  
      {
        questions: 'Why does Hermoiony use the time necklace?',
         answers: ['So she can be on time.' , 'To see what people were doing.'],
         correct: 'So she can be on time.',
         level: 'hard'

      },
      
      {
        questions: 'Why does harry get a new extra-fast broomstick?',
         answers: ['he broke his.' , 'He wanted a new one.'],
         correct: 'he broke his.',
         level: 'hard'

      },
      
      {
        questions: 'Why does Draco hate Harry?',
         answers: ['Cause harry didnt want to be friends with him.' , 'Cause he has a cool scar.'],
         correct: 'Cause harry didnt want to be friends with him.',
         level: 'easy'

      },
      
      {
        questions: 'Why did Voldemort drink unicorn blood?',
         answers: ['To stay alive longer.' , 'For its life cutting.'],
         correct: 'Voldemort.',
         level: 'hard'

      },
      
      {
        questions: 'Why did everyone think Harry was the heir of Slytherin?',
         answers: ['Cause he can speak parsel tounge.' , 'Voldemort is his dad.'],
         correct: 'Cause he can speak parsel tounge.',
         level: 'medium'

      }
    ]
    },
    {
      genre: 'HOW',
      questions:[
        
        {
          questions: 'How does Hermoiny get to class on time?',
           answers: ['Time necklace.' , 'Waking up early.'],
           correct: 'Time necklace.',
           level: 'hard'
  
        },
        
        {
          questions: 'How did moaing Mertle die?',
           answers: ['From the Basalisk.', 'Voldemort.'],
           correct: 'From the Basalisk.',
           level: 'medium'
  
        },
        
        {
          questions: 'How did the weaslys get to Diagon Alley?',
          answers: ['With magic powder and saying it in the fireplace.', 'By flying their car.'],
          correct: 'With magic powder and saying it in the fireplace.',
          level: 'medium'
        },
        
        {
          questions: 'How did harry get to diagon alley after running away?',
           answers: ['THE NIGHT BUS.' , 'ron and his brothers.'],
           correct: 'THE NIGHT BUS.',
           level: 'hard'
  
        },
        
        {
          questions: 'How did Tom Riddle comunicate with ginny?',
           answers: ['A magic diary.' , 'Mind control.'],
           correct: 'A magic diary.',
           level: 'hard'
  
        }
      ]
    },
    {
      genre: 'WHAT',
      questions:[
        
        {
          questions: 'What gave Harry his scar?',
           answers: ['He fell.' , 'Voldemort.'],
           correct: 'Voldemort.',
           level: 'easy'
  
        },
        
        {
          questions: 'What sorts the kids into their houses?',
           answers: ['A test.' , 'The sorting hat.'],
           correct: 'The sorting hat.',
           level: 'easy'
  
        },
        
        {
          questions: 'What did ron do to get his first howler?',
           answers: ['Crashing the magic car.' , 'Breaking his wand.'],
           correct: 'Crashing the magic car.',
           level: 'medium'
  
        },
        
        {
          questions: 'What did Hary do to open the chamber of secrets?',
           answers: ['Speaking parsel tounge to the snake on the tap.' , 'Breaking a wall.'],
           correct: 'Speaking parsel tounge to the snake on the tap.',
           level: 'medium'
  
        },
        
        {
          questions: 'What Happened to harrys parents?',
           answers: ['Voldemort killed them.' , 'A car crash.'],
           correct: 'Voldemort killed them.',
           level: 'hard'
  
        }
      ]
    }
 ]


 function addCategory(category) {
  const column = document.createElement('div')
  column.classList.add('genre-column')

  const genreTitle = document.createElement('div')
  genreTitle.classList.add('genre-title')
  genreTitle.innerHTML = category.genre

  column.appendChild(genreTitle)
  game.append(column)

  category.questions.forEach(question => {
    const card = document.createElement('div')
    card.classList.add('questions')
    column.append(card)

    if (question.level == 'easy'){
      card.innerHTML = 100
    }

    if (question.level == 'medium'){
      card.innerHTML = 200
    }

    if (question.level == 'hard'){
      card.innerHTML = 300
    }

    card.setAttribute('data-question', question.question)
    card.setAttribute('data-answer-1', question.answers[0])
    card.setAttribute('data-answer-1', question.answers[1])
    card.setAttribute('data-correct', question.correct)
    card.setAttribute('datav', question.answers[1])

  })
 }
 jepordyCategories.forEach(category => addCategory(category))
  
   

   const genreTitle = document.createElement('div')
   genreTitle.classList.add('genre-title')
   genreTitle.innerText = category.genre

   column.appendChild
   game.append(column)
 