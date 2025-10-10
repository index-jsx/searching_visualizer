import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./LinearCode.css";

export default function LinearCode() {
    const [language, setLanguage] = useState("Python");
    const code = {
        Python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
    arr=[1,10,11,12,16,17,12]
    target=12
    ans=linear_search(arr,target)
    print(ans)`,

        Java: `public class Main
{
    public static int Linear_search(int arr[],int target){
        int n = arr.length;
        for(int i = 0; i<n ; i++){
            if(arr[i] == target){
                return i;
            }
        }
        return -1;
    }
	public static void main(String[] args) {
	    int list[]={10,17,12,1,92,34,8};
	    int t = 8;
		int result = Linear_search(list,t);
		if (result!=-1){
		    System.out.println("your value is found at index:"+result);
		}
		else{
		    System.out.println("your is not found");
		}
	}
}`,

        JavaScript: `function linearSearch(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target) return i;
    }
    return -1;
}`,

        C: `#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == target)
            return i;
    }
    return -1;
}

int main() {
    int arr[] = {4, 2, 1, 3};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 3;
    int result = linearSearch(arr, n, target);
    if(result != -1)
        printf("Element found at index %d\\n", result);
    else
        printf("Element not found\\n");
    return 0;
}`
    }
    return (
        <>
            <div className="code-viewer-container">
                <select className="language-select"
                    onChange={(e) => setLanguage(e.target.value)}>
                    <option value="Python"> Python </option>
                    <option value="Java"> Java </option>
                    <option value="JavaScript"> JavaScript </option>
                    <option value="C"> C </option>

                </select>
                <div className="code-box">
                    <SyntaxHighlighter
                        language={language.toLowerCase()}
                        style={oneDark}
                        showLineNumbers
                        customStyle={{
                            borderRadius: "12px",
                            textAlign: "left",
                            fontSize: "15px",
                            padding: "20px",
                        }}
                    >
                        {code[language]}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}