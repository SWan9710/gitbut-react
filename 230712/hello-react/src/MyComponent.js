import PropTypes from 'prop-types'

const MyComponent = ({ name, age, children }) => {
    return (
        <div>
            내 컴포넌트 {name} 임 <br />
            children 은 {children} 임 <br />
            나이는 {age} 임
        </div>
    
        )
}

MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.PropType = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default MyComponent