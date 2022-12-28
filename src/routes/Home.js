import styled from '@emotion/styled';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { handleUserUpdate } from "../store/modules/user";
import { asyncFetch } from "../store/modules/data"

const ContentWrapper = styled.div`
  max-width:320px;
  margin:80px auto;

  display:grid;
  row-gap: 24px;
`

const TitleWrapper = styled.div`
  text-align: center;
  font-size:30px;
  font-weight: bold;
`

const TextInput = styled.input`
  height:40px;
  padding: 0 12px;
  font-size:16px;
  border-radius: 8px;
  border:1px solid gray;
`

const ButtonWrapper = styled.div`
  display:flex;
  column-gap: 24px;
`

const Button = styled.button`
  width:100%;
  height:32px;
  border-radius: 8px;
  border:none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const ResultWrapper = styled.div`
  display:grid;
  row-gap:12px;
`

const Typography = styled.div`
  font-size:16px;
  font-weight:bold;
`

function Home() {
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: '',
    name: ''
  })

  // form 변화 핸들링
  const handleFormChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // get axios data click
  const handleTokenBtnClick = () => {
    dispatch(asyncFetch())
  }

  // user update click
  const handleUserBtnClick = () => {
    dispatch(handleUserUpdate({ ...form }))
    setForm({ id: '', name: '' })
  }

  return (
    <ContentWrapper>
      <TitleWrapper>
        Redux-toolkit
      </TitleWrapper>
      <TextInput name='id' value={form.id} placeholder='id' onChange={handleFormChange} />
      <TextInput name='name' value={form.name} placeholder='name' onChange={handleFormChange} />
      <ButtonWrapper>
        <Button onClick={handleTokenBtnClick}>get axios data</Button>
        <Button onClick={handleUserBtnClick}>update user</Button>
      </ButtonWrapper>
      <ResultWrapper>
        <Typography>isData : {Object.keys(state.data.value).length ? 'true' : 'false'}</Typography>
      </ResultWrapper>
      <ResultWrapper>
        <Typography>ID : {state.user.id}</Typography>
        <Typography>NAME : {state.user.name}</Typography>
      </ResultWrapper>
    </ContentWrapper>
  )
}

export default Home;