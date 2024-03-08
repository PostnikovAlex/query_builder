import React from 'react';
import classNames from 'classnames';
export type HeaderProps = {
    leftSideNode?: React.ReactNode
    rightSideNode?: React.ReactNode
    headerClass?: string
    containerClass?: string
}
const Header = ({ leftSideNode, rightSideNode, headerClass, containerClass }: HeaderProps) => {
    return (
        <header className={classNames(' bg-blue-dark h-[65px]', headerClass)}>
            <div className={classNames(containerClass, 'flex flex-row items-center justify-between items-center h-full')}>
                {leftSideNode && leftSideNode}
                {rightSideNode && rightSideNode}
            </div>
        </header>
    );
};

export default Header;