import React from 'react';
import { IconsList } from '@/styles/icons';
import { ProjectIcons } from '@/types/types';
import { Tooltip } from '@nextui-org/tooltip';

type StackData = {
    stack: string[] | undefined;
}

const ProjectStack: React.FC<StackData> = (props) => {
    console.log("props stack: " + props.stack?.length);
    if (!props) {
        return (
            <ul className="flex flex-row text-2xl text-yellow-400">
                <li>
                    <Tooltip content={IconsList[0].name}>
                        {IconsList[0].icon}
                    </Tooltip>
                </li>
            </ul>
        )
    }
    return (
        <ul className="flex flex-row text-2xl text-yellow-400">
            {props.stack?.map( (stackItem) => {
                const indexIconList = IconsList.findIndex( (element: ProjectIcons) => element.id === stackItem);
                console.log(stackItem + " : " + indexIconList);
                return (
                    <li key={indexIconList} className="pr-3 text-3xl">
                        <Tooltip content={IconsList[indexIconList].name}>
                            {IconsList[indexIconList].icon}
                        </Tooltip>
                    </li>
                )
            })}

        </ul>
    );
}
export default ProjectStack;

