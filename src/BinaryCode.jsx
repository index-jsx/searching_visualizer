import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./BinaryCode.css";

export default function BinaryCode() {
    const [language, setLanguage] = useState("Python");
    const code = {
        Python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

arr = [1,2,3,4,5,6,7]
target = 5
print(binary_search(arr, target))`,

        Java: `public class Main {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        int target = 5;
        int result = binarySearch(arr, target);
        if(result != -1)
            System.out.println("Found at index: " + result);
        else
            System.out.println("Not found");
    }
}`,

        JavaScript: `function binarySearch(arr, target){
    let left = 0, right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const arr = [1,2,3,4,5,6,7];
const target = 5;
console.log(binarySearch(arr, target));`,

        C: `#include <stdio.h>

int binarySearch(int arr[], int n, int target){
    int left = 0, right = n-1;
    while(left <= right){
        int mid = (left + right)/2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main(){
    int arr[] = {1,2,3,4,5,6,7};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 5;
    int result = binarySearch(arr, n, target);
    if(result != -1)
        printf("Found at index: %d\\n", result);
    else
        printf("Not found\\n");
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