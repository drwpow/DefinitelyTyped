//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.omnibox
 */
export namespace Omnibox {
    /**
     * The style type.
     */
    type DescriptionStyleType = "url" | "match" | "dim";

    /**
     * The window disposition for the omnibox query. This is the recommended context to display results. For example,
     * if the omnibox command is to navigate to a certain URL, a disposition of 'newForegroundTab' means the navigation should
     * take place in a new selected tab.
     */
    type OnInputEnteredDisposition = "currentTab" | "newForegroundTab" | "newBackgroundTab";

    /**
     * A suggest result.
     */
    interface SuggestResult {
        /**
         * The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry.
         */
        content: string;

        /**
         * The text that is displayed in the URL dropdown. Can contain XML-style markup for styling.
         * The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query),
         * and 'dim' (for dim helper text). The styles can be nested, eg. <dim><match>dimmed match</match></dim>.
         * You must escape the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484
         */
        description: string;

        /**
         * Whether the suggest result can be deleted by the user.
         * Optional.
         */
        deletable?: boolean;
    }

    /**
     * A suggest result.
     */
    interface DefaultSuggestResult {
        /**
         * The text that is displayed in the URL dropdown.
         */
        description: string;
    }

    interface Static {
        /**
         * Sets the description and styling for the default suggestion. The default suggestion is the text that is displayed in the
         * first suggestion row underneath the URL bar.
         *
         * @param suggestion A partial SuggestResult object, without the 'content' parameter.
         */
        setDefaultSuggestion(suggestion: DefaultSuggestResult): void;

        /**
         * User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent exactly once
         * per input session, and before any onInputChanged events.
         */
        onInputStarted: Events.Event<() => void>;

        /**
         * User has changed what is typed into the omnibox.
         *
         * @param suggest A callback passed to the onInputChanged event used for sending suggestions back to the browser.
         */
        onInputChanged: Events.Event<(text: string, suggest: (suggestResults: SuggestResult[]) => void) => void>;

        /**
         * User has accepted what is typed into the omnibox.
         */
        onInputEntered: Events.Event<(text: string, disposition: OnInputEnteredDisposition) => void>;

        /**
         * User has ended the keyword input session without accepting the input.
         */
        onInputCancelled: Events.Event<() => void>;

        /**
         * User has deleted a suggested result.
         */
        onDeleteSuggestion: Events.Event<(text: string) => void>;
    }
}
