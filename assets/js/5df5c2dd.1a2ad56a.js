"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9391],{17570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(85893),a=n(11151);const i={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_video_transcript_translate_with_whisper.ipynb",description:"Use tools to extract and translate the transcript of a video file.",source_notebook:"/notebook/agentchat_video_transcript_translate_with_whisper.ipynb",tags:["whisper","function call"],title:"Translating Video audio using Whisper and GPT-3.5-turbo"},o="Translating Video audio using Whisper and GPT-3.5-turbo",r={id:"notebooks/agentchat_video_transcript_translate_with_whisper",title:"Translating Video audio using Whisper and GPT-3.5-turbo",description:"Use tools to extract and translate the transcript of a video file.",source:"@site/docs/notebooks/agentchat_video_transcript_translate_with_whisper.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_video_transcript_translate_with_whisper",permalink:"/autogen/docs/notebooks/agentchat_video_transcript_translate_with_whisper",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_video_transcript_translate_with_whisper.ipynb",tags:[{label:"whisper",permalink:"/autogen/docs/tags/whisper"},{label:"function call",permalink:"/autogen/docs/tags/function-call"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_video_transcript_translate_with_whisper.ipynb",description:"Use tools to extract and translate the transcript of a video file.",source_notebook:"/notebook/agentchat_video_transcript_translate_with_whisper.ipynb",tags:["whisper","function call"],title:"Translating Video audio using Whisper and GPT-3.5-turbo"},sidebar:"notebooksSidebar",previous:{title:"Preprocessing Chat History with `TransformMessages`",permalink:"/autogen/docs/notebooks/agentchat_transform_messages"},next:{title:"Web Scraping using Apify Tools",permalink:"/autogen/docs/notebooks/agentchat_webscraping_with_apify"}},p={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Example and Output",id:"example-and-output",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"translating-video-audio-using-whisper-and-gpt-35-turbo",children:"Translating Video audio using Whisper and GPT-3.5-turbo"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_video_transcript_translate_with_whisper.ipynb",children:(0,s.jsx)(t.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_video_transcript_translate_with_whisper.ipynb",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,s.jsxs)(t.p,{children:["In this notebook, we demonstrate how to use whisper and GPT-3.5-turbo\nwith ",(0,s.jsx)(t.code,{children:"AssistantAgent"})," and ",(0,s.jsx)(t.code,{children:"UserProxyAgent"})," to recognize and translate\nthe speech sound from a video file and add the timestamp like a subtitle\nfile based on\n",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_function_call.ipynb",children:"agentchat_function_call.ipynb"})]}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.admonition,{title:"Requirements",type:"info",children:[(0,s.jsx)(t.p,{children:"Some extra dependencies are needed for this notebook, which can be installed via pip:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pip install pyautogen openai openai-whisper\n"})}),(0,s.jsxs)(t.p,{children:["For more information, please refer to the ",(0,s.jsx)(t.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,s.jsxs)(t.p,{children:["It is recommended to store your OpenAI API key in the environment\nvariable. For example, store it in ",(0,s.jsx)(t.code,{children:"OPENAI_API_KEY"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import os\n\nconfig_list = [\n    {\n        "model": "gpt-4",\n        "api_key": os.getenv("OPENAI_API_KEY"),\n    }\n]\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Learn more about configuring LLMs for agents ",(0,s.jsx)(t.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"example-and-output",children:"Example and Output"}),"\n",(0,s.jsxs)(t.p,{children:["Below is an example of speech recognition from a ",(0,s.jsx)(t.a,{href:"https://drive.google.com/file/d/1QY0naa2acHw2FuH7sY3c-g2sBLtC2Sv4/view?usp=drive_link",children:"Peppa Pig cartoon\nvideo\nclip"}),"\noriginally in English and translated into Chinese. \u2018FFmpeg\u2019 does not\nsupport online files. To run the code on the example video, you need to\ndownload the example video locally. You can change ",(0,s.jsx)(t.code,{children:"your_file_path"})," to\nyour local video file path."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from typing import Annotated, List\n\nimport whisper\nfrom openai import OpenAI\n\nimport autogen\n\nsource_language = "English"\ntarget_language = "Chinese"\nkey = os.getenv("OPENAI_API_KEY")\ntarget_video = "your_file_path"\n\nassistant = autogen.AssistantAgent(\n    name="assistant",\n    system_message="For coding tasks, only use the functions you have been provided with. Reply TERMINATE when the task is done.",\n    llm_config={"config_list": config_list, "timeout": 120},\n)\n\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    is_termination_msg=lambda x: x.get("content", "") and x.get("content", "").rstrip().endswith("TERMINATE"),\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=10,\n    code_execution_config={},\n)\n\n\ndef translate_text(input_text, source_language, target_language):\n    client = OpenAI(api_key=key)\n\n    response = client.chat.completions.create(\n        model="gpt-3.5-turbo",\n        messages=[\n            {"role": "system", "content": "You are a helpful assistant."},\n            {\n                "role": "user",\n                "content": f"Directly translate the following {source_language} text to a pure {target_language} "\n                f"video subtitle text without additional explanation.: \'{input_text}\'",\n            },\n        ],\n        max_tokens=1500,\n    )\n\n    # Correctly accessing the response content\n    translated_text = response.choices[0].message.content if response.choices else None\n    return translated_text\n\n\n@user_proxy.register_for_execution()\n@assistant.register_for_llm(description="using translate_text function to translate the script")\ndef translate_transcript(\n    source_language: Annotated[str, "Source language"], target_language: Annotated[str, "Target language"]\n) -> str:\n    with open("transcription.txt", "r") as f:\n        lines = f.readlines()\n\n    translated_transcript = []\n\n    for line in lines:\n        # Split each line into timestamp and text parts\n        parts = line.strip().split(": ")\n        if len(parts) == 2:\n            timestamp, text = parts[0], parts[1]\n            # Translate only the text part\n            translated_text = translate_text(text, source_language, target_language)\n            # Reconstruct the line with the translated text and the preserved timestamp\n            translated_line = f"{timestamp}: {translated_text}"\n            translated_transcript.append(translated_line)\n        else:\n            # If the line doesn\'t contain a timestamp, add it as is\n            translated_transcript.append(line.strip())\n\n    return "\\n".join(translated_transcript)\n\n\n@user_proxy.register_for_execution()\n@assistant.register_for_llm(description="recognize the speech from video and transfer into a txt file")\ndef recognize_transcript_from_video(filepath: Annotated[str, "path of the video file"]) -> List[dict]:\n    try:\n        # Load model\n        model = whisper.load_model("small")\n\n        # Transcribe audio with detailed timestamps\n        result = model.transcribe(filepath, verbose=True)\n\n        # Initialize variables for transcript\n        transcript = []\n        sentence = ""\n        start_time = 0\n\n        # Iterate through the segments in the result\n        for segment in result["segments"]:\n            # If new sentence starts, save the previous one and reset variables\n            if segment["start"] != start_time and sentence:\n                transcript.append(\n                    {\n                        "sentence": sentence.strip() + ".",\n                        "timestamp_start": start_time,\n                        "timestamp_end": segment["start"],\n                    }\n                )\n                sentence = ""\n                start_time = segment["start"]\n\n            # Add the word to the current sentence\n            sentence += segment["text"] + " "\n\n        # Add the final sentence\n        if sentence:\n            transcript.append(\n                {\n                    "sentence": sentence.strip() + ".",\n                    "timestamp_start": start_time,\n                    "timestamp_end": result["segments"][-1]["end"],\n                }\n            )\n\n        # Save the transcript to a file\n        with open("transcription.txt", "w") as file:\n            for item in transcript:\n                sentence = item["sentence"]\n                start_time, end_time = item["timestamp_start"], item["timestamp_end"]\n                file.write(f"{start_time}s to {end_time}s: {sentence}\\n")\n\n        return transcript\n\n    except FileNotFoundError:\n        return "The specified audio file could not be found."\n    except Exception as e:\n        return f"An unexpected error occurred: {str(e)}"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now, start the chat:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'user_proxy.initiate_chat(\n    assistant,\n    message=f"For the video located in {target_video}, recognize the speech and transfer it into a script file, "\n    f"then translate from {source_language} text to a {target_language} video subtitle text. ",\n)\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"user_proxy (to chatbot):\n\nFor the video located in E:\\pythonProject\\gpt_detection\\peppa pig.mp4, recognize the speech and transfer it into a script file, then translate from English text to a Chinese video subtitle text. \n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested function Call: recognize_transcript_from_video *****\nArguments: \n{\n\"audio_filepath\": \"E:\\\\pythonProject\\\\gpt_detection\\\\peppa pig.mp4\"\n}\n********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION recognize_transcript_from_video...\nDetecting language using up to the first 30 seconds. Use `--language` to specify the language\nDetected language: English\n[00:00.000 --\x3e 00:03.000]  This is my little brother George.\n[00:03.000 --\x3e 00:05.000]  This is Mummy Pig.\n[00:05.000 --\x3e 00:07.000]  And this is Daddy Pig.\n[00:07.000 --\x3e 00:09.000]  Pee-pah Pig.\n[00:09.000 --\x3e 00:11.000]  Desert Island.\n[00:11.000 --\x3e 00:14.000]  Pepper and George are at Danny Dog's house.\n[00:14.000 --\x3e 00:17.000]  Captain Dog is telling stories of when he was a sailor.\n[00:17.000 --\x3e 00:20.000]  I sailed all around the world.\n[00:20.000 --\x3e 00:22.000]  And then I came home again.\n[00:22.000 --\x3e 00:25.000]  But now I'm back for good.\n[00:25.000 --\x3e 00:27.000]  I'll never forget you.\n[00:27.000 --\x3e 00:29.000]  Daddy, do you miss the sea?\n[00:29.000 --\x3e 00:31.000]  Well, sometimes.\n[00:31.000 --\x3e 00:36.000]  It is Grandad Dog, Grandpa Pig and Grumpy Rabbit.\n[00:36.000 --\x3e 00:37.000]  Hello.\n[00:37.000 --\x3e 00:40.000]  Can Captain Dog come out to play?\n[00:40.000 --\x3e 00:43.000]  What? We are going on a fishing trip.\n[00:43.000 --\x3e 00:44.000]  On a boat?\n[00:44.000 --\x3e 00:45.000]  On the sea!\n[00:45.000 --\x3e 00:47.000]  OK, let's go.\n[00:47.000 --\x3e 00:51.000]  But Daddy, you said you'd never get on a boat again.\n[00:51.000 --\x3e 00:54.000]  I'm not going to get on a boat again.\n[00:54.000 --\x3e 00:57.000]  You said you'd never get on a boat again.\n[00:57.000 --\x3e 01:00.000]  Oh, yes. So I did.\n[01:00.000 --\x3e 01:02.000]  OK, bye-bye.\n[01:02.000 --\x3e 01:03.000]  Bye.\nuser_proxy (to chatbot):\n\n***** Response from calling function \"recognize_transcript_from_video\" *****\n[{'sentence': 'This is my little brother George..', 'timestamp_start': 0, 'timestamp_end': 3.0}, {'sentence': 'This is Mummy Pig..', 'timestamp_start': 3.0, 'timestamp_end': 5.0}, {'sentence': 'And this is Daddy Pig..', 'timestamp_start': 5.0, 'timestamp_end': 7.0}, {'sentence': 'Pee-pah Pig..', 'timestamp_start': 7.0, 'timestamp_end': 9.0}, {'sentence': 'Desert Island..', 'timestamp_start': 9.0, 'timestamp_end': 11.0}, {'sentence': \"Pepper and George are at Danny Dog's house..\", 'timestamp_start': 11.0, 'timestamp_end': 14.0}, {'sentence': 'Captain Dog is telling stories of when he was a sailor..', 'timestamp_start': 14.0, 'timestamp_end': 17.0}, {'sentence': 'I sailed all around the world..', 'timestamp_start': 17.0, 'timestamp_end': 20.0}, {'sentence': 'And then I came home again..', 'timestamp_start': 20.0, 'timestamp_end': 22.0}, {'sentence': \"But now I'm back for good..\", 'timestamp_start': 22.0, 'timestamp_end': 25.0}, {'sentence': \"I'll never forget you..\", 'timestamp_start': 25.0, 'timestamp_end': 27.0}, {'sentence': 'Daddy, do you miss the sea?.', 'timestamp_start': 27.0, 'timestamp_end': 29.0}, {'sentence': 'Well, sometimes..', 'timestamp_start': 29.0, 'timestamp_end': 31.0}, {'sentence': 'It is Grandad Dog, Grandpa Pig and Grumpy Rabbit..', 'timestamp_start': 31.0, 'timestamp_end': 36.0}, {'sentence': 'Hello..', 'timestamp_start': 36.0, 'timestamp_end': 37.0}, {'sentence': 'Can Captain Dog come out to play?.', 'timestamp_start': 37.0, 'timestamp_end': 40.0}, {'sentence': 'What? We are going on a fishing trip..', 'timestamp_start': 40.0, 'timestamp_end': 43.0}, {'sentence': 'On a boat?.', 'timestamp_start': 43.0, 'timestamp_end': 44.0}, {'sentence': 'On the sea!.', 'timestamp_start': 44.0, 'timestamp_end': 45.0}, {'sentence': \"OK, let's go..\", 'timestamp_start': 45.0, 'timestamp_end': 47.0}, {'sentence': \"But Daddy, you said you'd never get on a boat again..\", 'timestamp_start': 47.0, 'timestamp_end': 51.0}, {'sentence': \"I'm not going to get on a boat again..\", 'timestamp_start': 51.0, 'timestamp_end': 54.0}, {'sentence': \"You said you'd never get on a boat again..\", 'timestamp_start': 54.0, 'timestamp_end': 57.0}, {'sentence': 'Oh, yes. So I did..', 'timestamp_start': 57.0, 'timestamp_end': 60.0}, {'sentence': 'OK, bye-bye..', 'timestamp_start': 60.0, 'timestamp_end': 62.0}, {'sentence': 'Bye..', 'timestamp_start': 62.0, 'timestamp_end': 63.0}]\n****************************************************************************\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested function Call: translate_transcript *****\nArguments: \n{\n\"source_language\": \"en\",\n\"target_language\": \"zh\"\n}\n*********************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION translate_transcript...\nuser_proxy (to chatbot):\n\n***** Response from calling function \"translate_transcript\" *****\n0s to 3.0s: \u8fd9\u662f\u6211\u5c0f\u5f1f\u5f1f\u4e54\u6cbb\u3002\n3.0s to 5.0s: \u8fd9\u662f\u5988\u5988\u732a\u3002\n5.0s to 7.0s: \u8fd9\u4f4d\u662f\u732a\u7238\u7238..\n7.0s to 9.0s: 'Peppa Pig...' (\u76ae\u76ae\u732a)\n9.0s to 11.0s: \"\u8352\u5c9b..\"\n11.0s to 14.0s: \u80e1\u6912\u548c\u4e54\u6cbb\u5728\u4e39\u5c3c\u72d7\u7684\u5bb6\u91cc\u3002\n14.0s to 17.0s: \u8239\u957f\u72d7\u6b63\u5728\u8bb2\u8ff0\u4ed6\u4f5c\u4e3a\u4e00\u540d\u6d77\u5458\u65f6\u7684\u6545\u4e8b\u3002\n17.0s to 20.0s: \u6211\u73af\u6e38\u4e86\u5168\u4e16\u754c\u3002\n20.0s to 22.0s: \u7136\u540e\u6211\u53c8\u56de\u5230\u4e86\u5bb6\u3002\u3002\n22.0s to 25.0s: \"\u4f46\u73b0\u5728\u6211\u56de\u6765\u4e86\uff0c\u6c38\u8fdc\u5730\u56de\u6765\u4e86...\"\n25.0s to 27.0s: \"\u6211\u6c38\u8fdc\u4e0d\u4f1a\u5fd8\u8bb0\u4f60...\"\n27.0s to 29.0s: \"\u7238\u7238\uff0c\u4f60\u60f3\u5ff5\u5927\u6d77\u5417\uff1f\"\n29.0s to 31.0s: \u55ef\uff0c\u6709\u65f6\u5019...\n31.0s to 36.0s: \u8fd9\u662f\u5927\u7237\u72d7\u3001\u7237\u7237\u732a\u548c\u813e\u6c14\u66b4\u8e81\u7684\u5154\u5b50\u3002\n36.0s to 37.0s: \u4f60\u597d\u3002\n37.0s to 40.0s: \"\u8239\u957f\u72d7\u53ef\u4ee5\u51fa\u6765\u73a9\u5417?\"\n40.0s to 43.0s: \u4ec0\u4e48\uff1f\u6211\u4eec\u8981\u53bb\u9493\u9c7c\u4e86\u3002\u3002\n43.0s to 44.0s: \u5728\u8239\u4e0a\uff1f\n44.0s to 45.0s: \u5728\u6d77\u4e0a\uff01\n45.0s to 47.0s: \u597d\u7684\uff0c\u6211\u4eec\u8d70\u5427\u3002\n47.0s to 51.0s: \"\u4f46\u662f\u7238\u7238\uff0c\u4f60\u8bf4\u8fc7\u4f60\u518d\u4e5f\u4e0d\u4f1a\u4e0a\u8239\u4e86\u2026\"\n51.0s to 54.0s: \"\u6211\u4e0d\u4f1a\u518d\u4e0a\u8239\u4e86..\"\n54.0s to 57.0s: \"\u4f60\u8bf4\u8fc7\u518d\u4e5f\u4e0d\u4f1a\u4e0a\u8239\u4e86...\"\n57.0s to 60.0s: \u54e6\uff0c\u662f\u7684\u3002\u6240\u4ee5\u6211\u505a\u4e86\u3002\n60.0s to 62.0s: \u597d\u7684\uff0c\u518d\u89c1\u3002\n62.0s to 63.0s: \u518d\u89c1\u3002\u3002\n*****************************************************************\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);