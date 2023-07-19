import React, { useState} from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';



import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'

const QuestionsDetails = () => {
    const { id } = useParams()
    const questionsList = useSelector(state => state.questionsReducer)
    
    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000'


    function DisplayHtml({ htmlString }) {
        return (
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        );
      }


      const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };


  const handleEnter = (e) => {
    if(e.key === 'Enter'){
        // eslint-disable-next-line no-use-before-define
        setAnswer(Answer + "\n")
    }
    const currentContent = editorState.getCurrentContent();
    const Answer = draftToHtml(convertToRaw(currentContent));

// Set the questionBody state with the current value of the editor
setAnswer(Answer);
}
    

    // function extractTextFromHtml(htmlString) {
    //     const parser = new DOMParser();
    //     const doc = parser.parseFromString(htmlString, 'text/html');
    //     const textNodes = doc.body.childNodes;
      
    //     let text = '';
    //     for (let i = 0; i < textNodes.length; i++) {
    //         const node = textNodes[i];
    //         if (node.nodeType === Node.TEXT_NODE) {
    //           text += node.textContent;
    //         } else if (node.nodeType === Node.ELEMENT_NODE) {
    //           text += extractTextFromHtml(node.innerHTML);
    //         }
    //       }
    //     return text.trim();
    //   }

      

    const handlePostAns = (e, answerLength) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        }else{
            if(Answer === ''){
                alert('Enter an answer before submitting')
            } else{
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name }))
            }
        }
    }

    const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied url : '+url+location.pathname)
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id, Navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote'))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote'))
    }

    return (
        <div className='question-details-page'>
            {
                questionsList.data === null ?
                <ul class="loader"><li></li><li></li><li></li><li></li><li></li></ul> :
                <>
                    {
                        questionsList.data.filter(question => question._id === id).map(question => (
                            <div key={question._id}>
                                <section className='question-details-container'>
                                    <h1>{question.questionTitle}</h1>
                                    <div className='question-details-container-2'>
                                        <div className="question-votes">
                                            <img src={upvote} alt="" width='18' className='votes-icon' onClick={handleUpVote}/>
                                            <p>{question.upVote.length - question.downVote.length}</p>
                                            <img src={downvote} alt="" width='18' className='votes-icon' onClick={handleDownVote}/>
                                        </div>
                                        <div style={{width: "100%"}}>
                                            {/* <p className='question-body'>{extractTextFromHtml(question.questionBody)}</p> */}
                                            <p className='question-body'><DisplayHtml htmlString={question.questionBody}/></p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag) => (
                                                        <p key={tag}>{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div>
                                                    <button type='button' onClick={handleShare}>Share</button>
                                                    {
                                                        User?.result?._id === question?.userId && (
                                                            <button type='button' onClick={handleDelete}>Delete</button>
                                                        )
                                                    }
                                                </div>
                                                <div>
                                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                                    <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                        <Avatar backgroundColor="orange" px='8px' py='5px' borderRadius="4px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {question.userPosted}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers !== 0 && (
                                        <section>
                                            <h3>{question.noOfAnswers} Answers</h3>
                                            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                        </section>
                                    )
                                }
                                <section className='post-ans-container'>
                                    <h3>Your Answer</h3>
                                    <form onSubmit={ (e) => { handlePostAns(e, question.answer.length) }}>



                                    <Editor value={Answer} onChange={handleEnter} wrapperClassName="text-editor-wrapper" editorClassName="text-editor-content" editorState={editorState} onEditorStateChange={handleEditorStateChange}
      toolbar={{
        options: [
          'inline',
          'blockType',
          'fontSize',
          'fontFamily',
          'list',
          'textAlign',
          'colorPicker',
          'link',
          'embedded',
          'emoji',
          'image',
          'remove',
          'history',
        ],
        inline: {
          options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
        },
        blockType: {
          options: [
            'Normal',
            'H1',
            'H2',
            'H3',
            'H4',
            'H5',
            'H6',
            'Blockquote',
            'Code',
            'unordered-list-item',
            'ordered-list-item',
            'header-one',
            'header-two',
            'header-three',
            'header-four',
            'header-five',
            'header-six',
          ],
        },
        fontSize: {
          options: [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 60, 72],
        },
        fontFamily: {
          options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
        },
        list: {
          options: ['unordered', 'ordered', 'indent', 'outdent'],
        },
        textAlign: {
          options: ['left', 'center', 'right', 'justify'],
        },
        colorPicker: {
          colors: [
            'rgb(0,0,0)',
            'rgb(255,255,255)',
            'rgb(255,0,0)',
            'rgb(255,127,0)',
            'rgb(255,255,0)',
            'rgb(0,255,0)',
            'rgb(0,255,255)',
            'rgb(0,0,255)',
            'rgb(255,0,255)',
          ],
        },
        link: {
          showOpenOptionOnHover: true,
        },
        embedded: {
          defaultSize: {
            height: 'auto',
            width: 'auto',
          },
        },
        image: {
          alt: {
            present: true,
            mandatory: true,
          },
          defaultSize: {
            height: 'auto',
            width: 'auto',
          },
        },
      }}
    />

                                        {/* <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br /> */}
                                        <input type="Submit" className='post-ans-btn' value='Post Your Answer'/>
                                    </form>
                                    <p>
                                        Browse other Question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                        } or 
                                        <Link to='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> ask your own question.</Link>
                                    </p>
                                </section>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    )
}

export default QuestionsDetails
