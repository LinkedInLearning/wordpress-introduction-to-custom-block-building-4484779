/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * RichText import allows us to create editable text fields.
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Imports InnerBlocks which allows us to use core React.js blocks
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( {attributes}) {
	const { header, list } = attributes;
	return (
		<div { ...useBlockProps.save() }>
		{ header && <RichText.Content tagName="h2" value={ header } /> }
		{ list && <RichText.Content tagName="ul" multiline="li" value={ list } /> }
		<div className="image-block">
            {/* Render the saved content of the image block */}
            <InnerBlocks.Content />
        </div>
	</div>

	);
}
