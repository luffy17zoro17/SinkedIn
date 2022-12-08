import PostHeader from '../components/PostHeader';
import PostList from '../components/PostList';



const Posts = ({postOpen, setPostOpen, title, icon,imgSrc, zeroClass, oneClass, threeClass}) => {
    return (
      <div className="">
        <div>
           <PostHeader
              postOpen={postOpen}
              setPostOpen={setPostOpen}
              title={title}
              imgSrc={imgSrc}
              icon={icon}
              zeroClass={zeroClass}
              oneClass={oneClass}
              threeClass={threeClass}
           />
        </div>   
        <div><PostList/></div>
      </div>
    );
}

export default Posts;