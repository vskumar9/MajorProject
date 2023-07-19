import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';






import './AskQuestion.css'
import { askQuestion } from '../../actions/question.js'

const AskQuestion = () => {
    const [ questionTitle, setQuestionTitle ] = useState('')
    const [ questionBody, setQuestionBody ] = useState('')
    const [ questionTags, setQuestionTags ] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()



    const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({ questionTitle, questionBody, questionTags})
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name }, navigate))
    }


    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            // eslint-disable-next-line no-use-before-define
            setQuestionBody(questionBody + "\n")
        }
        const currentContent = editorState.getCurrentContent();
        const questionBody = draftToHtml(convertToRaw(currentContent));

  // Set the questionBody state with the current value of the editor
  setQuestionBody(questionBody);
    }
    return (
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you’re asking a question to another person</p>
                            <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>


                            <Editor value={questionBody} onChange={handleEnter} wrapperClassName="text-editor-wrapper" editorClassName="text-editor-content" editorState={editorState} onEditorStateChange={handleEditorStateChange}
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
                            {/* <textarea name="" id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}}  cols="30" rows="10"  onKeyPress={handleEnter}></textarea> */}
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" id='ask-ques-tags' onChange={(e) => {setQuestionTags(e.target.value.toLowerCase().split(" "))}}  placeholder='e.g. (xml typescript wordpress)'/>
                        </label>
                        
                    </div>
                    <input type="submit" value='Reivew your question' className='review-btn'/>
                </form>
            </div>
        </div>
    )
}

export default AskQuestion
