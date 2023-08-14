import PropTypes from 'prop-types';
import {
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

export const ShareContent = (shareUrl) => {
  console.log(`shareUrl.shareUrl: `, shareUrl.shareUrl);
  return (
    <div className='flex justify-center items-center w-full max-w-[480px] pb-[10px] mb-[20px] mx-auto'>
      <div className='me-[8px]'>
        <LinkedinShareButton url={shareUrl.shareUrl}>
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
      </div>
      <div className='me-[8px]'>
        <WhatsappShareButton url={shareUrl.shareUrl}>
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
      </div>
      <div>
        <TelegramShareButton url={shareUrl.shareUrl}>
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

ShareContent.propTypes = {
  shareUrl: PropTypes.string,
};
