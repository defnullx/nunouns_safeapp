import { ReactNode } from 'react';
import classes from './MobileNounActivityRow.module.css';
import { useActiveLocale } from '../../../../hooks/useActivateLocale';
import responsiveUiUtilsClasses from '../../../../utils/ResponsiveUIUtils.module.css';

interface MobileNounActivityRowProps {
  onClick: () => void;
  icon: ReactNode;
  primaryContent: ReactNode;
  secondaryContent?: ReactNode;
}

const MobileNounActivityRow: React.FC<MobileNounActivityRowProps> = props => {
  const { onClick, icon, primaryContent, secondaryContent } = props;

  const activeLocale = useActiveLocale();

  return (
    <tr className={classes.wrapper} onClick={onClick}>
    <td className={classes.icon}>{icon}</td>
    <td className={classes.activityTableCell}>
      <div className={classes.infoContainer}>{primaryContent}</div>
    </td>
    <td className={activeLocale === 'ja-JP' ? responsiveUiUtilsClasses.desktopOnly : ''}>
      <div className={classes.secondaryContentWrapper}>
        <div className={classes.secondaryContentContainer}>{secondaryContent}</div>
      </div>
    </td>
  </tr>
  );
};

export default MobileNounActivityRow;
