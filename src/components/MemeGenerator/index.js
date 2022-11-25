import {Component} from 'react'
import {
  MainContainer,
  FormContainer,
  MainHeading,
  FormList,
  LabelUrl,
  Input,
  ResultImg,
  SelectFont,
  ButtonGenarate,
  TopHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here
class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomtext: '',
    textSize: fontSizesOptionsList.optionId,
    memourl: '',
    memoToptext: '',
    memoBottomText: '',
    memofontsize: 0,
  }

  onChangeUrl = event => {
    const {url} = this.state
    this.setState({url: event.target.value})
    console.log(url)
  }

  onChangeToptext = event => {
    const {topText} = this.state
    this.setState({topText: event.target.value})
    console.log(topText)
  }

  onChangeBottomtext = event => {
    const {bottomtext} = this.state
    this.setState({bottomtext: event.target.value})
    console.log(bottomtext)
  }

  onChangeTextSize = event => {
    const {textSize} = this.state
    this.setState({textSize: event.target.value})
    console.log(textSize)
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {url, topText, bottomtext, textSize} = this.state
    console.log(url, 'url')
    this.setState({
      memourl: url,
      memoToptext: topText,
      memoBottomText: bottomtext,
      memofontsize: textSize,
    })
  }

  render() {
    const {
      url,
      topText,
      bottomtext,
      textSize,
      memourl,
      memoBottomText,
      memoToptext,
      memofontsize,
    } = this.state
    console.log(
      memourl,
      memoToptext,
      memoBottomText,
      textSize,
      memofontsize,
      'ol',
    )
    return (
      <MainContainer>
        <FormContainer>
          <MainHeading>Meme Generator</MainHeading>
          <FormList onSubmit={this.onSubmitForm} as="form">
            <LabelUrl htmlFor="imgUrl">Image URL</LabelUrl>
            <br />
            <Input
              type="text"
              id="imgurl"
              value={url}
              placeholder="Enter the Image url"
              onChange={this.onChangeUrl}
            />
            <br />
            <LabelUrl htmlFor="toptext">Top Text</LabelUrl>
            <br />
            <Input
              type="text"
              id="toptext"
              value={topText}
              placeholder="Enter the Top Text"
              onChange={this.onChangeToptext}
            />
            <br />
            <LabelUrl htmlFor="bottomtext">Bottom Text</LabelUrl>
            <br />
            <Input
              type="text"
              id="bottomtext"
              value={bottomtext}
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomtext}
            />
            <br />
            <LabelUrl htmlFor="fontsize">Font Size</LabelUrl>
            <br />
            <SelectFont
              type="text"
              id="fontsize"
              value={textSize}
              onChange={this.onChangeTextSize}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SelectFont>
            <br />
            <ButtonGenarate type="submit">Generate</ButtonGenarate>
          </FormList>
        </FormContainer>
        <ResultImg bgImage={memourl} data-testid="meme">
          <TopHeading textSize={memofontsize}>{memoToptext}</TopHeading>
          <TopHeading textSize={memofontsize}>{memoBottomText}</TopHeading>
        </ResultImg>
      </MainContainer>
    )
  }
}
export default MemeGenerator
