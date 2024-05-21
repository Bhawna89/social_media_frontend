import React,{useState,useEffect}  from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import HomePage from './homepage';
import { useAuth } from './AuthContext';

const Profile = () => {
    const  {user} = useAuth();

    const [name, setName] = useState('');

    useEffect(() => {
      
        // Fetch data from the API using the user's username
        fetch(`https://social-media-backend-7m3p7xxhd-bhawna89s-projects.vercel.app//api/user`)
            .then(response => response.json())
            .then(data => {
                // Assuming the data structure has a 'fullName' field
              
                setName(data.FullName);
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, );
    
    useEffect(() => {
        const postData = async () => {
          try {
            const response = await fetch('https://social-media-backend-efja41s5s-bhawna89s-projects.vercel.app/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username: user.username })
            });
            const result = await response.json();
            console.log(result);
           setName(result.FullName);
          } catch (error) {
            console.error('Error posting data:', error);
          }
        };
      
        postData();
      }, []);
      // Fetch data whenever the username changes

    if (name=='') {
        return <div>Loading...</div>;
    }
 
  return (
    <>
    <div className="insta_codepen_wrap">
       <div className='insta__container insta__acc'>
        <section className='insta__header insta__acc_menu'>
            <div id='insta__acc_menu-panel'>
                <h1>{user.username}</h1>

                <div className="insta__acc_menu_search"><svg aria-label="Поиск" className="insta__acc_menu_search_icon"
                        color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16">
                        <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
                    </svg> Поиск</div>

                <Link to ="/home"> 
                <svg aria-label="Главная страница" color="#262626" fill="#262626" height="24" role="img"
                    viewBox="0 0 24 24" width="24">
                        <path
                        d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                        fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>  
                </svg></Link>

                <svg aria-label="Messenger" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
                    width="24">
                    <path
                        d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
                        fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path>
                    <path
                        d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
                        fill-rule="evenodd"></path>
                </svg>

                <svg aria-label="Новая публикация" color="#262626" fill="#262626" height="24" role="img"
                    viewBox="0 0 24 24" width="24">
                    <path
                        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2">
                    </path>
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                </svg>

                <svg aria-label="Найти людей" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
                    width="24">
                    <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    </polygon>
                    <polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056">
                    </polygon>
                    <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"></circle>
                </svg>

                <svg aria-label="Что нового" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
                    width="24">
                    <path
                        d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                    </path>
                </svg>
            </div>
            <img src='http://via.placeholder.com/24' className='insta__mini_icon' alt='icon' />


        </section>
        <section className='insta__acc_header'>
            <div className='insta__icon-wrap insta__acc_about_icon-wrap'>
                <img src='http://via.placeholder.com/150' alt='Фото профиля' className='insta__acc_about_icon' />


            </div>
            <div className='insta__acc_about'>
                <span className='insta__acc_about_username'>
                </span>
                <div id='insta__acc_about_btns'>
                    <div className="insta__acc_about_btn insta__acc_about_btn-white">{name}</div>
                   
                </div>
                <div className='insta__acc_about_stat'>
                    <div className='insta__acc_about_stat-item'><span className='insta__acc_about_number'>
                        </span> x followers</div>
                    <div className='insta__acc_about_stat-item'><span className='insta__acc_about_number'>
                        </span> x following</div>
                   
                </div>
                <div className='insta__acc_about_name'>
                </div>
                <div className='insta__acc_about_bio'>
                    <a href='ссылка' className='insta__acc_about_link'>Life : The biggest adventure</a>


                </div>
            </div>
        </section>
        <section className='insta__acc_highlights'>
            <div className='insta__acc_highlights_item'>
                <div className='insta__acc_highlights_img-wrap'>
                    <img className='insta__acc_highlights_img' src='http://via.placeholder.com/70' alt='Актуальное' />
                </div>
                <div className='insta__acc_highlights_text'>Lorem, ipsum.</div>
            </div>

        </section>
        <section id='insta__acc_tabs'>
            <div className="insta__acc_tab insta__acc_tab_active"><svg className="insta__acc_tab_icon" color="#262626"
                    fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12">
                    <rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" width="18" x="3" y="3"></rect>
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
                </svg> Публикации</div>
            <div className="insta__acc_tab"><svg className="insta__acc_tab_icon" color="#8e8e8e" fill="#8e8e8e" height="12"
                    role="img" viewBox="0 0 24 24" width="12">
                    <path
                        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z">
                    </path>
                </svg> Видео</div>
            <div className="insta__acc_tab"><svg className="insta__acc_tab_icon" color="#8e8e8e" fill="#8e8e8e" height="12"
                    role="img" viewBox="0 0 24 24" width="12">
                    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                </svg> Сохраненное</div>
            <div className="insta__acc_tab"><svg className="insta__acc_tab_icon" color="#8e8e8e" fill="#8e8e8e" height="12"
                    role="img" viewBox="0 0 24 24" width="12">
                    <path
                        d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"></path>
                    <path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"></path>
                    <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"></circle>
                </svg> Отметки</div>
        </section>
        <section className='insta__acc_photos'>
            <img alt='photo' className='insta__acc_photo' src='http://via.placeholder.com/250' />

            <img alt='photo' className='insta__acc_photo' src='http://via.placeholder.com/250' />

            <img alt='photo' className='insta__acc_photo' src='http://via.placeholder.com/250' />

            <img alt='photo' className='insta__acc_photo' src='http://via.placeholder.com/250' />

            <img alt='photo' className='insta__acc_photo' src='http://via.placeholder.com/250' />

            <img alt='photo' className='insta__acc_photo' src='http://via.placeholder.com/250' />

        </section>
    </div>

   
</div>
</>
  );
};

export default Profile;
