import ReactMarkdown from 'react-markdown'


export default function ClaudeRecipe(props) {
    return (
        <div className="markdown_container">
            <h1 className="font-semibold text-2xl">Chef Claude Recommends:</h1>
            <ReactMarkdown>{props.AI_respone}</ReactMarkdown>
        </div>
        
    )
}