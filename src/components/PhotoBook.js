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
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 2}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 3}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 4}`} />
            </div>
            <div className="photo">
              <img src="https://coh.ug.edu.gh/sites/default/files/2023-07/College%20of%20Humanities%20and%20Careers%20and%20Counselling%20Centre%20Hold%20Orientation%20for%20Prospective%20Interns1.jpg" alt={`Photo ${index * 5 + 4}`} />
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
