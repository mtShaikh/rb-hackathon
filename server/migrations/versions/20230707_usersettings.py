"""usersettings

Revision ID: _usersettings
Revises: 1_init
Create Date: 2023-07-07 08:36:24.062053+00:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '_usersettings'
down_revision = '1_init'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_settings',
    sa.Column('setting_id', sa.Integer(), nullable=False),
    sa.Column('brand_title', sa.Text(), nullable=True),
    sa.Column('brand_description', sa.Text(), nullable=True),
    sa.Column('schedule', sa.Text(), nullable=True),
    sa.Column('post_genre', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('setting_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_settings')
    # ### end Alembic commands ###