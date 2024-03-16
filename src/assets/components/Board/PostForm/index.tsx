"use client";
import { useFormState } from "react-dom";

interface FormErrors {
  title?: string[];
  content?: string[];
}

interface FormState {
  errors: FormErrors;
}

interface PostFormProps {
  formAction: any;
  initialData: {
    title: string;
    content: string;
  };
}

const PostForm = ({ formAction, initialData }: PostFormProps) => {
  const [formState, action] = useFormState<FormState>(formAction, {
    errors: {},
  });

  return (
    <>
      <h1>{initialData.title ? "글 수정하기" : "글 작성하기"}</h1>

      <form action={action}>
        <div>
          <div>
            <label htmlFor="title">글 제목</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={initialData.title}
            />
            {formState.errors.title && (
              <div>{formState.errors.title?.join(",")}</div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="content">내용</label>
          <textarea
            name="content"
            id="content"
            defaultValue={initialData.content}
          ></textarea>
          {formState.errors.content && (
            <div>{formState.errors.content?.join(",")}</div>
          )}
        </div>

        <div>
          <button type="submit">저장하기</button>
          <button>취소하기</button>
        </div>
      </form>
    </>
  );
};

export default PostForm;
