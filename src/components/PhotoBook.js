import React from 'react';

const PhotoBook = () => {
  return (
    <div className="photobook">
      {/* Row 1 */}
      <div className="photo-row">
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 1}`} />
            </div>
            <div className="photo">
              <img src="https://alumni.ug.edu.gh/sites/alumni.ug.edu.gh/files/Images/DSC_9545.jpg" alt={`Photo ${index * 5 + 2}`} />
            </div>
            <div className="photo">
              <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/465740282_1102216871906243_2032564654819738075_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEnu0jb3zKTYrMzSRHC6DqagVjwD_LZ656BWPAP8tnrnhHSKZg_9EozkYm4iekLLRO25ZpfwFN_IzaQexOhLF6y&_nc_ohc=qoaG-_tiBDcQ7kNvgGQ-Gg5&_nc_oc=AdhDgJnA5MjPIS-P7dN-gie5gjB9x9nB67B4RrJ3ldtHZ0g7ucSHFm1tBtxZ3oG9HRs&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=AfNxiAYI04N6iHYFLAQwnTE&oh=00_AYDm8knNnNORK-9e3ZtEgvtM_ZO_svsDjUVHNmCb9FQ1Zw&oe=67AA591A" alt={`Photo ${index * 5 + 3}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 4}`} />
            </div>
            <div className="photo">
              <img src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/459755281_1060558566072074_1648358395302808478_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEuKWM4nu3yDz-M8Fezy0onH4q1-wpiSiYfirX7CmJKJv1SDekzRtWZiCdWlpqgX9mSzm60tIAVThci7UtPgGBn&_nc_ohc=TUDStSIOZgQQ7kNvgEFveyE&_nc_oc=AdhjfVApBZpx5dYNjbn4MPdwItzLxjDYOJ-6woEXM4OmxKkjtmUTTLy6jvrAPHBTaM8&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ALTxc1Rqzo66RS5Sjvp7kTv&oh=00_AYCLfqcuAaGY7Rcj5tJcf1YLRbfUFcCyusG9xq4io8W2oQ&oe=67AA44BB" alt={`Photo ${index * 5 + 4}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 5}`} />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Row 2 */}
      {/* <div className="photo-row">
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 6}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 7}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 8}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 9}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 10}`} />
            </div>
          </React.Fragment>
        ))}
      </div> */}
    </div>
  );
};

export default PhotoBook;
