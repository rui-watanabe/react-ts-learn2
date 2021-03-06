import React, { FC, useState } from 'react';
import FormItem from './FormItem';
import TextareaComp from './TextAreaComp';

const ContactForm: FC = () => {
  const [state, setState] = useState({
    comment: '商品名やお問い合わせ内容を入力ください',
    last_name: '',
    first_name: '',
    last_name_kana: '',
    first_name_kana: '',
    email: ''
  });

  return(
    <>
      <h2>お問い合わせフォーム</h2>
      <form>
        <div>
          <div>
            <FormItem
              title="お問い合わせ項目"
              required={ true }
            />
          </div>
          <div>
            <input type="radio" name="aradio" value="A" />
            <label>商品について</label>
            <input type="radio" name="bradio" value="B" />
            <label>採用について</label>
            <input type="radio" name="cradio" value="C" />
            <label>その他</label>
          </div>
        </div>
        <hr></hr>

        <div>
          <div>
            <TextareaComp
              name="お問い合わせ内容"
              value={ state.comment }
            />
          </div>
          <p><textarea></textarea></p>
        </div>
        <hr></hr>

        <div>
          <div>
            <p>お名前</p>
            <p>必須</p>
          </div>
          <div>
          <p>姓<input type="text" /></p><p>名<input type="text" /></p>
          </div>
        </div>
        <hr></hr>
        <div>
          <div>
            <p>フリガナ</p>
            <p>必須</p>
          </div>
          <div>
          <p>セイ<input type="text" /></p><p>メイ<input type="text" /></p>
          </div>
        </div>
        <hr></hr>
        <div>
          <div>
            <div>
              <p>メールアドレス</p>
              <p>必須</p>
            </div>
          </div>
          <p><input type="text" /></p>
        </div>
        <hr></hr>

        <div>
          <div>
            <p>返信不要欄</p>
          </div>
          <div>
            <input type="checkbox" /><p>返信不要 <span>※返信が不要な場合はチェックしてください）</span></p>
          </div>
        </div>
      </form>
    </>
  )
};


export default ContactForm;